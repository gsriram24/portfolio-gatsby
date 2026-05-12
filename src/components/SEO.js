import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import favicon from '../images/favicon.ico';

const BASE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.gsriram.dev/#person',
      name: 'G Sriram',
      alternateName: 'gsriram24',
      url: 'https://www.gsriram.dev/',
      jobTitle: 'Software Development Engineer III',
      description:
        'Fullstack Software Engineer (SDE-III) at GoHighLevel. Specializing in Vue.js, React, Node.js, and NestJS — building large-scale SaaS products, AI-powered features, and SEO tooling.',
      disambiguatingDescription:
        'Software Development Engineer III at GoHighLevel, specializing in Vue.js, React, Node.js, and NestJS',
      worksFor: {
        '@type': 'Organization',
        name: 'HighLevel',
        url: 'https://www.gohighlevel.com',
      },
      knowsAbout: [
        'Vue.js',
        'Nuxt.js',
        'React',
        'Next.js',
        'Node.js',
        'NestJS',
        'TypeScript',
        'SaaS',
        'Schema Markup',
        'AI-assisted development',
        'LangChain',
        'OpenAI',
        'Playwright',
        'Vitest',
        'Tailwind CSS',
      ],
      sameAs: [
        'https://github.com/gsriram24',
        'https://www.linkedin.com/in/gsriram24/',
        'https://stackoverflow.com/users/12080199/g-sriram',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.gsriram.dev/#website',
      url: 'https://www.gsriram.dev/',
      name: 'G Sriram | Fullstack Software Engineer',
      publisher: { '@id': 'https://www.gsriram.dev/#person' },
      inLanguage: 'en-US',
    },
  ],
};

const SEO = ({ description, keywords, title, author, schema }) => {
  const { pathname } = useLocation();
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaTitle = title || data.site.siteMetadata.title;
        const metaKeywords = keywords || [
          'G Sriram',
          'Sriram',
          'fullstack engineer',
          'software engineer',
          'web developer',
          'frontend engineer',
          'backend engineer',
          'full stack developer',
          'software developer',
          'SDE-III',
          'GoHighLevel',
          'HighLevel',
          'Vue.js',
          'React',
          'NestJS',
          'Node.js',
          'Nuxt.js',
          'SaaS',
          'AI features',
          'SEO tooling',
          'schema markup',
          'page builder',
          'ecommerce',
          'Claude',
          'Cursor',
          'LangChain',
          'OpenAI',
          'AI-assisted development',
        ];
        const metaAuthor = author || data.site.siteMetadata.author;
        const metaUrl = `${data.site.siteMetadata.siteUrl}${pathname}`;
        const pageSchema = {
          '@context': 'https://schema.org',
          '@graph': [
            ...BASE_SCHEMA['@graph'],
            ...(schema || []),
          ],
        };
        return (
          <>
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              title={metaTitle}
              link={[{ rel: 'icon', href: `${favicon}` }]}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: metaTitle,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: metaAuthor,
                },
                {
                  name: `twitter:title`,
                  content: metaTitle,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
                {
                  name: 'og:url',
                  content: metaUrl,
                },
              ].concat({ name: 'keywords', content: metaKeywords.join(`, `) })}
            />
            <Helmet>
              <script type="application/ld+json">
                {JSON.stringify(pageSchema)}
              </script>
            </Helmet>
          </>
        );
      }}
    />
  );
};

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;
export default SEO;
