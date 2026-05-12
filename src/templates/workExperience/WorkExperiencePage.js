import React from 'react';
import WorkExperienceLeft from './WorkExperienceLeft';
import WorkExperienceRight from './WorkExperienceRight';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import '../../css/tailwind.css';
import '../../pages/index.css';
import { graphql } from 'gatsby';
export const query = graphql`
  query ($slug: String!) {
    workExperienceJson(slug: { eq: $slug }) {
      slug
      keywords
      workExperience {
        title
        duration
        description
      }
      keyFocus
      summary
      projects {
        description
        duration
        link
        name
      }
      id
      duration
      description
      companyName
      otherResponsibilities {
        title
        duration
        description
      }
      awards {
        description
        duration
        title
      }
    }
  }
`;
const WorkExperiencePage = ({
  data: { workExperienceJson: workExperience },
}) => {
  const pageUrl = `https://www.gsriram.dev/experience/${workExperience.slug}/`;
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${workExperience.companyName} | Work Experience | G Sriram`,
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
          name: workExperience.companyName,
          item: pageUrl,
        },
      ],
    },
  };
  return (
    <>
      <SEO
        title={`${workExperience.companyName} | Work Experience | G Sriram`}
        description={workExperience.description}
        keywords={workExperience.keywords}
        schema={[webPageSchema]}
      />
      <Layout
        left={<WorkExperienceLeft workExperience={workExperience} />}
        right={
          <WorkExperienceRight
            workExperience={workExperience.workExperience}
            projects={workExperience.projects}
            awards={workExperience.awards}
            otherResponsibilities={workExperience.otherResponsibilities}
          />
        }
      />
    </>
  );
};

export default WorkExperiencePage;
