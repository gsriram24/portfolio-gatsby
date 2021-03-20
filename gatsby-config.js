module.exports = {
  siteMetadata: {
    title: 'G Sriram',
    description:
      'Personal Developer Portfolio for G Sriram. Check out my Projects and Skills in this website.',
    author: 'G Sriram',
    siteUrl: `https://www.gsriram.dev/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.gsriram.dev',
        sitemap: 'https://www.gsriram.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        whitelistPatterns: [/-primary/, /-secondary/, /-accent/, /-6xl/],
        ignore: ['/index.css'],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Poppins',
              variants: ['300', '400', '500', '600', '700'],
            },
          ],
        },
      },
    },
  ],
};
