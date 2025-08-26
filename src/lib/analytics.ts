import { cookieManager } from './cookieUtils';

class AnalyticsManager {
  private static instance: AnalyticsManager;
  private initialized = false;

  private constructor() {
    this.init();
  }

  public static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  private init(): void {
    // Listen for consent changes
    cookieManager.onConsentChanged((preferences) => {
      if (preferences.analytics && !this.initialized) {
        this.initializeAnalytics();
      }
    });

    // Check if already consented
    const preferences = cookieManager.getPreferences();
    if (preferences?.analytics && !this.initialized) {
      this.initializeAnalytics();
    }
  }

  private initializeAnalytics(): void {
    if (this.initialized) return;

    // Initialize Google Analytics with privacy settings
    this.loadGoogleAnalytics();
    this.initialized = true;
  }

  private loadGoogleAnalytics(): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };
    
    window.gtag('js', new Date());
    
    // Configure with privacy-first settings for CNDP compliance
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID', {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_flags: 'SameSite=Strict;Secure',
      cookie_expires: 60 * 60 * 24 * 30, // 30 days
      send_page_view: true
    });

    // Set consent mode defaults
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted'
    });
  }

  // Track page views (only if consent given)
  public trackPageView(page: string, title?: string): void {
    if (!this.canTrack()) return;

    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: page,
        // Add Morocco-specific data for localization
        country: 'MA',
        language: document.documentElement.lang || 'fr'
      });
    }
  }

  // Track events (only if consent given)
  public trackEvent(eventName: string, parameters: Record<string, any> = {}): void {
    if (!this.canTrack()) return;

    if (window.gtag) {
      window.gtag('event', eventName, {
        ...parameters,
        // Ensure no PII is tracked for CNDP compliance
        anonymized: true,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Track appointment bookings (medical practice specific)
  public trackAppointmentRequest(service?: string): void {
    this.trackEvent('appointment_request', {
      service_type: service,
      event_category: 'engagement',
      value: 1
    });
  }

  // Track contact form submissions
  public trackContactForm(formType: string): void {
    this.trackEvent('contact_form_submit', {
      form_type: formType,
      event_category: 'lead'
    });
  }

  // Track service page views
  public trackServiceView(serviceName: string): void {
    this.trackEvent('service_view', {
      service_name: serviceName,
      event_category: 'content'
    });
  }

  private canTrack(): boolean {
    const preferences = cookieManager.getPreferences();
    return preferences?.analytics === true;
  }
}

// Export singleton instance
export const analytics = AnalyticsManager.getInstance();

// Convenience functions for common tracking
export const trackPageView = (page: string, title?: string) => analytics.trackPageView(page, title);
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => analytics.trackEvent(eventName, parameters);
export const trackAppointmentRequest = (service?: string) => analytics.trackAppointmentRequest(service);
export const trackContactForm = (formType: string) => analytics.trackContactForm(formType);
export const trackServiceView = (serviceName: string) => analytics.trackServiceView(serviceName);