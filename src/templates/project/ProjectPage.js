import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';
import '../../css/tailwind.css';
import '../../pages/index.css';
import SEO from '../../components/SEO';
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
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      testimonials {
        designation
        name
        testimonial
      }
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
  return (
    <>
      <SEO
        title={`${project.projectName} | Projects | G Sriram`}
        description={project.summary}
      />
      <Layout
        left={
          <ProjectLeft
            projectName={project.projectName}
            description={project.description}
            techStack={project.techStack}
          />
        }
        right={
          <ProjectRight
            images={project.images}
            demo={project.demo}
            testimonials={project.testimonials}
            github={project.github}
          />
        }
      />
    </>
  );
};

export default ProjectPage;
