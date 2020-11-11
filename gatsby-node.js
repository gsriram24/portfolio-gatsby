exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const pages = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (pages.errors) {
    console.log('Error retrieving data', pages.errors);
    return;
  }

  const projectTemplate = require.resolve(
    './src/templates/project/ProjectPage.js'
  );

  pages.data.allProjectsJson.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node.slug}/`,
      component: projectTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
