export interface ConsentPreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: number;
  version: string;
}

const CONSENT_KEY = 'cookie_consent_preferences';
const CONSENT_VERSION = '1.0.0';

export class CookieManager {
  private static instance: CookieManager;
  private preferences: ConsentPreferences | null = null;
  private onConsentChange: ((preferences: ConsentPreferences) => void)[] = [];

  private constructor() {
    this.loadPreferences();
  }

  public static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  public hasConsent(): boolean {
    return this.preferences !== null;
  }

  public getPreferences(): ConsentPreferences | null {
    return this.preferences;
  }

  public setPreferences(preferences: Partial<ConsentPreferences>): void {
    const newPreferences: ConsentPreferences = {
      essential: true, // Always true
      analytics: preferences.analytics ?? false,
      marketing: preferences.marketing ?? false,
      preferences: preferences.preferences ?? false,
      timestamp: Date.now(),
      version: CONSENT_VERSION
    };

    this.preferences = newPreferences;
    this.savePreferences(newPreferences);
    this.applyPreferences(newPreferences);
    this.notifyConsentChange(newPreferences);
  }

  public acceptAll(): void {
    this.setPreferences({
      analytics: true,
      marketing: true,
      preferences: true
    });
  }

  public rejectAll(): void {
    this.setPreferences({
      analytics: false,
      marketing: false,
      preferences: false
    });
  }

  public onConsentChanged(callback: (preferences: ConsentPreferences) => void): () => void {
    this.onConsentChange.push(callback);
    return () => {
      const index = this.onConsentChange.indexOf(callback);
      if (index > -1) {
        this.onConsentChange.splice(index, 1);
      }
    };
  }

  private loadPreferences(): void {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ConsentPreferences;
        if (parsed.version === CONSENT_VERSION) {
          this.preferences = parsed;
          this.applyPreferences(parsed);
        }
      }
    } catch (error) {
      console.warn('Failed to load cookie preferences:', error);
    }
  }

  private savePreferences(preferences: ConsentPreferences): void {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(preferences));
    } catch (error) {
      console.warn('Failed to save cookie preferences:', error);
    }
  }

  private applyPreferences(preferences: ConsentPreferences): void {
    // Clear existing non-essential cookies if consent is withdrawn
    if (!preferences.analytics) {
      this.clearAnalyticsCookies();
    }
    if (!preferences.marketing) {
      this.clearMarketingCookies();
    }
    if (!preferences.preferences) {
      this.clearPreferenceCookies();
    }

    // Initialize or reinitialize scripts based on consent
    this.initializeScripts(preferences);
  }

  private clearAnalyticsCookies(): void {
    // Clear Google Analytics cookies
    this.deleteCookie('_ga');
    this.deleteCookie('_ga_*');
    this.deleteCookie('_gid');
    this.deleteCookie('_gat');
    
    // Clear localStorage analytics data
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('_ga') || key.includes('analytics')) {
        localStorage.removeItem(key);
      }
    });
  }

  private clearMarketingCookies(): void {
    // Clear Facebook cookies
    this.deleteCookie('_fbp');
    this.deleteCookie('fr');
    this.deleteCookie('_fbc');
    
    // Clear other marketing cookies
    this.deleteCookie('_utm');
  }

  private clearPreferenceCookies(): void {
    // Keep only essential preference cookies
    const essentialKeys = ['cookie_consent_preferences'];
    Object.keys(localStorage).forEach(key => {
      if (!essentialKeys.includes(key) && 
          (key.includes('preference') || key.includes('theme') || key.includes('language'))) {
        localStorage.removeItem(key);
      }
    });
  }

  private deleteCookie(name: string): void {
    // Delete cookie for current domain
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    // Delete cookie for parent domain
    const domain = window.location.hostname;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${domain}`;
  }

  private initializeScripts(preferences: ConsentPreferences): void {
    // Initialize Google Analytics if consent given
    if (preferences.analytics && !window.gtag) {
      this.loadGoogleAnalytics();
    }

    // Initialize Facebook Pixel if consent given
    if (preferences.marketing && !window.fbq) {
      this.loadFacebookPixel();
    }

    // Update existing scripts about consent state
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied',
        ad_storage: preferences.marketing ? 'granted' : 'denied',
        ad_user_data: preferences.marketing ? 'granted' : 'denied',
        ad_personalization: preferences.marketing ? 'granted' : 'denied'
      });
    }
  }

  private loadGoogleAnalytics(): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
  }

  private loadFacebookPixel(): void {
    window.fbq = function(...args: any[]) {
      if (window.fbq.callMethod) {
        window.fbq.callMethod.apply(window.fbq, args);
      } else {
        window.fbq.queue.push(args);
      }
    };
    
    if (!window._fbq) window._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
    
    window.fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
    window.fbq('track', 'PageView');
  }

  private notifyConsentChange(preferences: ConsentPreferences): void {
    this.onConsentChange.forEach(callback => {
      try {
        callback(preferences);
      } catch (error) {
        console.warn('Error in consent change callback:', error);
      }
    });
  }

  public logConsentAction(action: string, preferences?: ConsentPreferences): void {
    // Log consent actions for compliance (anonymized)
    const logData = {
      action,
      timestamp: new Date().toISOString(),
      preferences: preferences || this.preferences,
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    // Store in localStorage for audit trail
    try {
      const logs = JSON.parse(localStorage.getItem('consent_logs') || '[]');
      logs.push(logData);
      // Keep only last 100 logs
      if (logs.length > 100) {
        logs.splice(0, logs.length - 100);
      }
      localStorage.setItem('consent_logs', JSON.stringify(logs));
    } catch (error) {
      console.warn('Failed to log consent action:', error);
    }
  }

  // Reset consent for testing
  resetConsent(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(CONSENT_KEY);
    this.preferences = null;
    // Notify listeners that consent has been reset
    this.onConsentChange.forEach(callback => {
      try {
        callback({
          essential: true,
          analytics: false,
          marketing: false,
          preferences: false,
          timestamp: Date.now(),
          version: CONSENT_VERSION
        });
      } catch (error) {
        console.warn('Error in consent reset callback:', error);
      }
    });
  }
}

// Global type extensions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: any;
    _fbq: any;
  }
}

export const cookieManager = CookieManager.getInstance();
