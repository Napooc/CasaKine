import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object[];
}

export const SEO = ({
  title = "Dr. Nawal El Ghorfi - Kinésithérapeute D.E. Casablanca | Casakine",
  description = "Centre de kinésithérapie premium à Casablanca. Dr. Nawal El Ghorfi vous accompagne vers un rétablissement optimal avec des soins personnalisés et des techniques modernes. Prise de rendez-vous en ligne.",
  keywords = "kinésithérapeute casablanca, physiothérapie maroc, rééducation casablanca, dr nawal el ghorfi, amincissement casablanca, massage thérapeutique, traumatologie sport, femme enceinte kinésithérapie, gymnastique médicale",
  canonical,
  ogImage = "https://casakine.com/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png",
  ogType = "website",
  noindex = false,
  structuredData = []
}: SEOProps) => {
  const fullTitle = title.includes('Casakine') ? title : `${title} | Casakine`;
  const currentUrl = canonical || `https://casakine.com${window.location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dr. Nawal El Ghorfi - Casakine" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      <link rel="canonical" href={currentUrl} />

      {/* Language and Location */}
      <meta name="language" content="fr" />
      <meta name="geo.region" content="MA-09" />
      <meta name="geo.placename" content="Casablanca" />
      <meta name="geo.position" content="33.5731;-7.5898" />
      <meta name="ICBM" content="33.5731, -7.5898" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Casakine - Centre de Kinésithérapie" />
      <meta property="og:locale" content="fr_MA" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Business Info */}
      <meta name="contact:phone_number" content="+212661677096" />
      <meta name="contact:email" content="info@casakine.com" />
      <meta name="contact:address" content="19 Rue De Masmouda, Casablanca 20210, Morocco" />

      {/* Structured Data */}
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};