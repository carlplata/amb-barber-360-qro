import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: Record<string, unknown>;
}

export const SEO = ({
  title = 'Curso de Barbería en Querétaro | 5 Certificaciones + Bolsa de Trabajo',
  description = 'Aprende Barbería en 3 meses o Sabatinos. 5 Certificaciones Oficiales, Bolsa de Trabajo y Especialización para Estilistas. ¡Clase Muestra Gratis en Querétaro!',
  canonical = 'https://barberiaqueretaro.com', // TODO: Update with real domain
  image = '/og-image.png',
  type = 'website',
  schema,
  keywords = 'curso de barberia queretaro, escuela de barberia, curso de barberia sabatino, curso para estilistas, aprender barberia rapido, bolsa de trabajo barberia',
  children
}: SEOProps & { keywords?: string, children?: React.ReactNode }) => {
  const siteTitle = 'Amb Barber 360 Qro';
  const fullTitle = title === siteTitle ? siteTitle : `${title} | ${siteTitle}`;

  // Default LocalBusiness Schema
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Amb Barber 360 Qro',
    'image': image,
    '@id': canonical,
    'url': canonical,
    'telephone': '+5214423643964',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Av. Tecnológico Sur #4A, Local 09, Centro',
      'addressLocality': 'Santiago de Querétaro',
      'postalCode': '76010',
      'addressCountry': 'MX'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 20.5880, // Approximate coords for Queretaro Centro, update if needed
      'longitude': -100.3880
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      'opens': '10:00',
      'closes': '19:00'
    },
    'priceRange': '$$'
  };

  const jsonLd = schema ? { ...defaultSchema, ...schema } : defaultSchema;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {children}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};
