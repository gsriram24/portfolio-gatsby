import React, { useState } from 'react';
import AllProjectsLeft from '../components/allProjects/AllProjectsLeft';
import AllProjectsRight from '../components/allProjects/AllProjectsRight';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import '../css/tailwind.css';
import './index.css';
import SEO from '../components/SEO';
export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          projectName
          slug
          summary
          featuredTags
          tags
        }
      }
    }
    allTagsJson {
      edges {
        node {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tagName
          id
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const [filteredTags, setFilteredTags] = useState([]);
  const checkBoxHandler = (id, checked) => {
    if (checked) {
      setFilteredTags(prev => [...prev, id]);
    } else {
      setFilteredTags(prev => prev.filter(e => e !== id));
    }
  };
  const projects = data.allProjectsJson.edges.filter(
    project =>
      project.node.tags.filter(tag => filteredTags.includes(tag)).length !==
        0 || filteredTags.length === 0
  );
  const tags = data.allTagsJson.edges;

  return (
    <>
      <SEO
        title="Projects | G Sriram"
        description="All of my latest projects on various tools and technologies that I have learnt over the years. "
      />
      <Layout
        left={<AllProjectsLeft tags={tags} checkBoxHandler={checkBoxHandler} />}
        right={<AllProjectsRight projects={projects} />}
      />
    </>
  );
};
export default Home;
