import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://devconnecttz.site';

const SEO = ({
  title = 'DevConnect Tanzania - Empowering Tanzanian Developers',
  description = 'DevConnect Tanzania is a community-driven platform empowering Tanzanian developers through bootcamps, meetups, workshops, mentorship, open source projects, and hackathons.',
  keywords = 'DevConnect Tanzania, Tanzanian developers, developer community, tech Tanzania, coding bootcamp, developer meetup, software development, open source Tanzania, hackathons Tanzania, tech mentorship',
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
    name: 'DevConnect Tanzania',
    url: BASE_URL,
    logo: `${BASE_URL}/DevConnect.png`,
    description: 'Empowering Tanzanian developers through community, learning, and collaboration.',
    sameAs: [
      // Add your social media URLs here when available
      // 'https://twitter.com/devconnecttz',
      // 'https://linkedin.com/company/devconnecttz',
      // 'https://github.com/devconnecttz',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@devconnecttz.site',
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
      <meta property="og:site_name" content="DevConnect Tanzania" />

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

