import React from 'react';
import WorkExperienceLeft from './WorkExperienceLeft';
import WorkExperienceRight from './WorkExperienceRight';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
export const query = graphql`
  query($slug: String!) {
    workExperienceJson(slug: { eq: $slug }) {
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
  return (
    <>
      <SEO
        title={`${workExperience.companyName} | Work Experience | G Sriram`}
        description={workExperience.description}
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
