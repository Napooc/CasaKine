export interface CookieItem {
  name: string;
  provider: string;
  purpose: string;
  expiry: string;
  type: 'HTTP' | 'Local Storage' | 'Session Storage';
}

export interface CookieCategory {
  id: string;
  name: {
    en: string;
    fr: string;
    ar: string;
  };
  description: {
    en: string;
    fr: string;
    ar: string;
  };
  essential: boolean;
  cookies: CookieItem[];
}

export const cookieCategories: CookieCategory[] = [
  {
    id: 'essential',
    name: {
      en: 'Essential Cookies',
      fr: 'Cookies Essentiels',
      ar: 'ملفات تعريف الارتباط الأساسية'
    },
    description: {
      en: 'These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you which amount to a request for services.',
      fr: 'Ces cookies sont nécessaires au fonctionnement du site Web et ne peuvent pas être désactivés. Ils sont généralement définis en réponse aux actions que vous effectuez et qui équivalent à une demande de services.',
      ar: 'هذه الملفات ضرورية لعمل الموقع ولا يمكن إيقافها. عادة ما يتم تعيينها استجابة للإجراءات التي تقوم بها والتي تشكل طلبًا للخدمات.'
    },
    essential: true,
    cookies: [
      {
        name: 'consent_preferences',
        provider: 'Dr. Nawal El Ghorfi',
        purpose: 'Stores user cookie consent preferences',
        expiry: '1 year',
        type: 'Local Storage'
      },
      {
        name: 'session_id',
        provider: 'Dr. Nawal El Ghorfi',
        purpose: 'Maintains user session for security',
        expiry: 'Session',
        type: 'HTTP'
      }
    ]
  },
  {
    id: 'analytics',
    name: {
      en: 'Analytics Cookies',
      fr: 'Cookies d\'Analyse',
      ar: 'ملفات تعريف الارتباط التحليلية'
    },
    description: {
      en: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      fr: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site Web en collectant et en rapportant des informations de manière anonyme.',
      ar: 'تساعدنا هذه الملفات في فهم كيفية تفاعل الزوار مع موقعنا من خلال جمع المعلومات والإبلاغ عنها بشكل مجهول.'
    },
    essential: false,
    cookies: [
      {
        name: '_ga',
        provider: 'Google Analytics',
        purpose: 'Distinguishes unique users',
        expiry: '2 years',
        type: 'HTTP'
      },
      {
        name: '_ga_*',
        provider: 'Google Analytics',
        purpose: 'Maintains session state',
        expiry: '2 years',
        type: 'HTTP'
      }
    ]
  },
  {
    id: 'marketing',
    name: {
      en: 'Marketing Cookies',
      fr: 'Cookies Marketing',
      ar: 'ملفات تعريف الارتباط التسويقية'
    },
    description: {
      en: 'These cookies are used to deliver personalized advertisements and measure the effectiveness of advertising campaigns.',
      fr: 'Ces cookies sont utilisés pour diffuser des publicités personnalisées et mesurer l\'efficacité des campagnes publicitaires.',
      ar: 'تُستخدم هذه الملفات لتقديم إعلانات مخصصة وقياس فعالية الحملات الإعلانية.'
    },
    essential: false,
    cookies: [
      {
        name: '_fbp',
        provider: 'Facebook',
        purpose: 'Tracks user behavior for advertising',
        expiry: '90 days',
        type: 'HTTP'
      },
      {
        name: 'fr',
        provider: 'Facebook',
        purpose: 'Enables ad delivery and targeting',
        expiry: '90 days',
        type: 'HTTP'
      }
    ]
  },
  {
    id: 'preferences',
    name: {
      en: 'Preference Cookies',
      fr: 'Cookies de Préférence',
      ar: 'ملفات تعريف الارتباط للتفضيلات'
    },
    description: {
      en: 'These cookies remember your choices and preferences to provide a more personalized experience.',
      fr: 'Ces cookies mémorisent vos choix et préférences pour offrir une expérience plus personnalisée.',
      ar: 'تتذكر هذه الملفات اختياراتك وتفضيلاتك لتوفير تجربة أكثر تخصيصًا.'
    },
    essential: false,
    cookies: [
      {
        name: 'language_preference',
        provider: 'Dr. Nawal El Ghorfi',
        purpose: 'Remembers selected language',
        expiry: '1 year',
        type: 'Local Storage'
      },
      {
        name: 'theme_preference',
        provider: 'Dr. Nawal El Ghorfi',
        purpose: 'Remembers theme settings',
        expiry: '1 year',
        type: 'Local Storage'
      }
    ]
  }
];

export const translations = {
  en: {
    banner: {
      title: 'We value your privacy',
      description: 'We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.',
      acceptAll: 'Accept All',
      rejectAll: 'Reject All',
      customize: 'Customize Preferences',
      privacyPolicy: 'Privacy Policy'
    },
    modal: {
      title: 'Cookie Preferences',
      description: 'Manage your cookie preferences. You can enable or disable different types of cookies below.',
      savePreferences: 'Save Preferences',
      acceptAll: 'Accept All',
      rejectAll: 'Reject All',
      close: 'Close'
    },
    footer: {
      manageCookies: 'Manage Cookies'
    }
  },
  fr: {
    banner: {
      title: 'Nous respectons votre vie privée',
      description: 'Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu. En cliquant sur "Tout Accepter", vous consentez à notre utilisation de cookies.',
      acceptAll: 'Tout Accepter',
      rejectAll: 'Tout Rejeter',
      customize: 'Personnaliser les Préférences',
      privacyPolicy: 'Politique de Confidentialité'
    },
    modal: {
      title: 'Préférences des Cookies',
      description: 'Gérez vos préférences de cookies. Vous pouvez activer ou désactiver différents types de cookies ci-dessous.',
      savePreferences: 'Enregistrer les Préférences',
      acceptAll: 'Tout Accepter',
      rejectAll: 'Tout Rejeter',
      close: 'Fermer'
    },
    footer: {
      manageCookies: 'Gérer les Cookies'
    }
  },
  ar: {
    banner: {
      title: 'نحن نقدر خصوصيتك',
      description: 'نحن نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربة التصفح الخاصة بك وتحليل حركة المرور على الموقع وتخصيص المحتوى. بالنقر على "قبول الكل"، فإنك توافق على استخدامنا لملفات تعريف الارتباط.',
      acceptAll: 'قبول الكل',
      rejectAll: 'رفض الكل',
      customize: 'تخصيص التفضيلات',
      privacyPolicy: 'سياسة الخصوصية'
    },
    modal: {
      title: 'تفضيلات ملفات تعريف الارتباط',
      description: 'إدارة تفضيلات ملفات تعريف الارتباط الخاصة بك. يمكنك تمكين أو تعطيل أنواع مختلفة من ملفات تعريف الارتباط أدناه.',
      savePreferences: 'حفظ التفضيلات',
      acceptAll: 'قبول الكل',
      rejectAll: 'رفض الكل',
      close: 'إغلاق'
    },
    footer: {
      manageCookies: 'إدارة ملفات تعريف الارتباط'
    }
  }
} as const;