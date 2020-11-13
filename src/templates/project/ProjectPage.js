import React from 'react';
import { graphql, Link } from 'gatsby';
export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      description
      github
      projectName
      slug
      summary
      techStack {
        name
        icon
      }
      testimonials
      demo
      images {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
const ProjectPage = ({ data }) => {
  const project = data.projectsJson;
  console.log(project);
  return <Link to="/#contact">Contact</Link>;
};

export default ProjectPage;
