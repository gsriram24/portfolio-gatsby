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
const Home = ({ data }) => {
  const projects = data.allProjectsJson.edges;
  return (
    <>
      <SEO />
      <Layout left={<IndexLeft />} right={<IndexRight projects={projects} />} />
    </>
  );
};
export default Home;
