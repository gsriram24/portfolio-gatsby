import React from 'react';
import IndexLeft from '../components/index/IndexLeft';
import IndexRight from '../components/index/IndexRight';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import '../css/tailwind.css';
import './index.css';
import SEO from '../components/SEO';
export const query = graphql`
  query {
    allProjectsJson(filter: { isFeatured: { eq: true } }) {
      edges {
        node {
          projectName
          slug
          summary
          featuredTags
        }
      }
    }
  }
`;
const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://www.gsriram.dev/#profilepage',
  url: 'https://www.gsriram.dev/',
  name: 'G Sriram | Fullstack Software Engineer',
  dateCreated: '2021-01-01',
  dateModified: '2026-05-12',
  isPartOf: { '@id': 'https://www.gsriram.dev/#website' },
  mainEntity: { '@id': 'https://www.gsriram.dev/#person' },
};

const Home = ({ data }) => {
  const projects = data.allProjectsJson.edges;
  return (
    <>
      <SEO schema={[profilePageSchema]} />
      <Layout left={<IndexLeft />} right={<IndexRight projects={projects} />} />
    </>
  );
};
export default Home;
