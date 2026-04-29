import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://devtz.site';

const SEO = ({
  title = 'DevTZ - Software Solutions & Digital Services',
  description = 'DevTZ provides premium software solutions and digital services for enterprises and individuals. We specialize in custom applications, web development, mobile apps, automation, and enterprise software solutions.',
  keywords = 'DevTZ, software solutions Tanzania, enterprise software, custom applications, web development, mobile apps, automation, digital services, software company Tanzania, business automation',
  image = '/DevConnect.png',
  type = 'website',
  noindex = false,
  structuredData = null,
}) => {
  const location = useLocation();
  const url = `${BASE_URL}${location.pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevTZ',
    url: BASE_URL,
    logo: `${BASE_URL}/DevConnect.png`,
    description: 'Premium software solutions and digital services for enterprises and individuals.',
    sameAs: [
      // Add your social media URLs here when available
      // 'https://twitter.com/devtz',
      // 'https://linkedin.com/company/devtz',
      // 'https://github.com/devtz',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@devtz.site',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Tanzania',
    },
  };

  const schemaData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="DevTZ" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured Data / JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

