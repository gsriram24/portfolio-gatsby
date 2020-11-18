import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import favicon from '../images/favicon.ico';
const SEO = ({ description, keywords, title, author }) => {
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
          'Developer',
          'programmer',
          'web developer',
          'app developer',
          'engineer',
          'freelance',
          'project',
          'frontend',
          'backend',
          'machine learning',
          'full stack',
          'freelancer',
          'software developer',
        ];
        const metaAuthor = author || data.site.siteMetadata.author;
        const metaUrl = `${data.site.siteMetadata.siteUrl}${pathname}`;
        return (
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
