// Structured Data Schemas for SEO

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Casakine - Dr. Nawal El Ghorfi",
  "description": "Centre de kinésithérapie premium à Casablanca spécialisé en rééducation fonctionnelle, amincissement et bien-être.",
  "url": "https://casakine.com",
  "image": "https://casakine.com/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png",
  "logo": "https://casakine.com/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png",
  "telephone": "+212661677096",
  "email": "info@casakine.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "19 Rue De Masmouda",
    "addressLocality": "Casablanca",
    "postalCode": "20210",
    "addressRegion": "Grand Casablanca",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.5731",
    "longitude": "-7.5898"
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-14:00",
    "Su emergency"
  ],
  "priceRange": "€€",
  "paymentAccepted": "Cash, Credit Card",
  "currenciesAccepted": "MAD, EUR",
  "foundingDate": "2010",
  "founder": {
    "@type": "Person",
    "name": "Dr. Nawal El Ghorfi",
    "jobTitle": "Kinésithérapeute Diplômée d'État",
    "alumniOf": "École de Kinésithérapie",
    "awards": "15 ans d'expérience en kinésithérapie"
  },
  "medicalSpecialty": [
    "Kinésithérapie",
    "Rééducation fonctionnelle",
    "Physiothérapie",
    "Amincissement",
    "Massage thérapeutique"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de Kinésithérapie",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Rééducation Spécialisée",
          "description": "Rééducation post-traumatique et post-opératoire"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Amincissement",
          "description": "Techniques modernes d'amincissement et remodelage corporel"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Kinésithérapie Respiratoire",
          "description": "Rééducation respiratoire pour tous âges"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Amina B."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Excellent centre de kinésithérapie. Dr. Nawal est très professionnelle et attentive. Les résultats de ma rééducation ont dépassé mes attentes."
    }
  ]
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Casakine - Centre de Kinésithérapie Casablanca",
  "url": "https://casakine.com",
  "description": "Centre de kinésithérapie premium à Casablanca. Soins spécialisés en rééducation, amincissement et bien-être par Dr. Nawal El Ghorfi.",
  "publisher": {
    "@type": "MedicalBusiness",
    "name": "Casakine"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://casakine.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "sameAs": [
    "https://www.facebook.com/casakine",
    "https://www.instagram.com/casakine",
    "https://www.linkedin.com/company/casakine"
  ]
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Casakine",
  "alternateName": "Centre de Kinésithérapie Dr. Nawal El Ghorfi",
  "url": "https://casakine.com",
  "logo": "https://casakine.com/lovable-uploads/9fea51bb-283e-4627-919e-c5778bf17144.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+212661677096",
    "contactType": "customer service",
    "areaServed": "MA",
    "availableLanguage": ["French", "Arabic"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "19 Rue De Masmouda",
    "addressLocality": "Casablanca",
    "postalCode": "20210",
    "addressCountry": "MA"
  },
  "sameAs": [
    "https://www.facebook.com/casakine",
    "https://www.instagram.com/casakine"
  ]
});

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  price?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Casakine",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "19 Rue De Masmouda",
      "addressLocality": "Casablanca",
      "postalCode": "20210",
      "addressCountry": "MA"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Casablanca"
  },
  "availableLanguage": ["fr", "ar"],
  ...(service.price && { "offers": {
    "@type": "Offer",
    "price": service.price,
    "priceCurrency": "MAD"
  }})
});

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});