import React from 'react';
import { graphql } from 'gatsby';
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
  return <div>Project Page</div>;
};

export default ProjectPage;
