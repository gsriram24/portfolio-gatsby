import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
const SEO = ({ description, keywords, title, author }) => {
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
        return (
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={metaTitle}
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
      }
    }
  }
`;
export default SEO;
