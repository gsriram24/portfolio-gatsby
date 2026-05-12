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
      keywords
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
          fluid(quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
const ProjectPage = ({ data }) => {
  const project = data.projectsJson;
  const pageUrl = `https://www.gsriram.dev/projects/${project.slug}/`;
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${project.projectName} | Projects | G Sriram`,
    isPartOf: { '@id': 'https://www.gsriram.dev/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.gsriram.dev/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects',
          item: 'https://www.gsriram.dev/projects/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: project.projectName,
          item: pageUrl,
        },
      ],
    },
  };
  const isSoftwareSourceCode = !!project.github;
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': isSoftwareSourceCode ? 'SoftwareSourceCode' : 'SoftwareApplication',
    name: project.projectName,
    description: project.summary,
    author: { '@id': 'https://www.gsriram.dev/#person' },
    ...(isSoftwareSourceCode
      ? { codeRepository: project.github }
      : {
          applicationCategory: 'DeveloperApplication',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        }),
    ...(project.demo ? { url: project.demo } : {}),
  };
  return (
    <>
      <SEO
        title={`${project.projectName} | Projects | G Sriram`}
        description={project.description}
        keywords={project.keywords}
        schema={[webPageSchema, projectSchema]}
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
