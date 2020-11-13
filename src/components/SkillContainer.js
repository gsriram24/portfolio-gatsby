import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SkillTile from './SkillTile';

const SkillContainer = ({ darkMode }) => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allSkillsJson {
            edges {
              node {
                title
                skills
                icon {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div className="skill-container flex flex-no-wrap sm:grid lg:overflow-visible overflow-x-scroll sm:grid-cols-2 gap-2">
            {data.allSkillsJson.edges.map((edge, i) => {
              return (
                <div className="w-3/4 flex-none sm:w-full">
                  <SkillTile skill={edge} darkMode={darkMode} />
                </div>
              );
            })}
          </div>
        );
      }}
    />
  );
};

export default SkillContainer;
