import { Helmet } from 'react-helmet-async';

interface GoogleVerificationProps {
  verificationCode?: string;
  analyticsId?: string;
}

export const GoogleVerification = ({ 
  verificationCode, 
  analyticsId = "G-XXXXXXXXXX" // Replace with actual GA4 Measurement ID
}: GoogleVerificationProps) => {
  return (
    <Helmet>
      {/* Google Search Console Verification */}
      {verificationCode && (
        <meta name="google-site-verification" content={verificationCode} />
      )}
      
      {/* Google Analytics with Consent Management */}
      {analyticsId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Initialize with denied consent by default (CNDP compliance)
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'wait_for_update': 500
              });
              
              gtag('config', '${analyticsId}', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: false, // Will be sent after consent
                anonymize_ip: true,
                allow_google_signals: false
              });
            `}
          </script>
        </>
      )}
    </Helmet>
  );
};