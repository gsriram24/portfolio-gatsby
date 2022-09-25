import React from 'react';
import { motion } from 'framer-motion';
import GenericTile from '../../components/GenericTile';
import { ThemeContext } from '../../context/ThemeContext';
const WorkExperienceRight = ({
  workExperience,
  projects,
  awards,
  otherResponsibilities,
}) => {
  const animationDuration = 1.6;
  const animationEase = [0.62, 0.28, 0.23, 0.99];
  const tileVariants = {
    hidden: {
      x: -1500,
    },
    visible: {
      x: 0,
      transition: {
        duration: animationDuration,
        ease: animationEase,
        delay: 0.2,
      },
    },
  };

  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => (
        <motion.div className="w-full overflow-hidden xl:w-11/12 pb-16">
          <motion.div
            variants={tileVariants}
            initial="hidden"
            animate="visible"
          >
            {workExperience?.length && (
              <div
                className={`pt-16 ${
                  projects?.length ||
                  awards?.length ||
                  otherResponsibilities?.length
                    ? ''
                    : 'lg:h-screen'
                }`}
                id="experience"
              >
                {workExperience?.map(work => (
                  <GenericTile
                    key={work.title}
                    title={work.title}
                    tags={[work.duration]}
                    description={work.description}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            )}
            {projects?.length && (
              <div
                className={`pt-16 ${
                  awards?.length || otherResponsibilities?.length
                    ? ''
                    : 'lg:h-screen'
                }`}
                id="projects"
              >
                {projects?.map(project => (
                  <>
                    <GenericTile
                      key={project.name}
                      title={project.name}
                      tags={[project.duration]}
                      description={project.description}
                      darkMode={darkMode}
                    />
                    {project.link && (
                      <div className="flex w-full justify-end">
                        <a
                          className={`flex mb-4 text-primary-${
                            darkMode ? 'light' : 'dark'
                          }  flex-row link-${
                            darkMode ? 'light' : 'dark'
                          } items-center`}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.23816 6.58451L1.26426 8.5584C0.454768 9.3679 0 10.4658 0 11.6106C0 12.7554 0.454768 13.8533 1.26426 14.6628C2.07375 15.4723 3.17166 15.9271 4.31646 15.9271C5.46126 15.9271 6.55916 15.4723 7.36866 14.6628L9.9986 12.0314C10.4867 11.5432 10.8506 10.945 11.0598 10.2871C11.2689 9.62911 11.3171 8.9306 11.2004 8.25014C11.0837 7.56969 10.8055 6.92716 10.3891 6.37648C9.9727 5.82581 9.43028 5.38305 8.80735 5.08539L7.96428 5.92847C7.87868 6.0142 7.80423 6.11039 7.74272 6.21477C8.224 6.35312 8.66084 6.61469 9.01006 6.97362C9.35927 7.33254 9.60877 7.77639 9.73388 8.26129C9.85899 8.74618 9.85538 9.25533 9.72342 9.73841C9.59145 10.2215 9.3357 10.6618 8.98144 11.0157L6.35294 13.6456C5.81302 14.1856 5.08074 14.4889 4.31718 14.4889C3.55362 14.4889 2.82134 14.1856 2.28142 13.6456C1.7415 13.1057 1.43818 12.3734 1.43818 11.6099C1.43818 10.8463 1.7415 10.114 2.28142 9.57413L3.42231 8.43468C3.26134 7.83147 3.19915 7.20617 3.23816 6.58307V6.58451Z"
                              fill={darkMode ? '#F2F2F2' : '#1A2026'}
                            />
                            <path
                              d="M4.67235 7.18584L4.91261 6.94558C5.26905 6.58782 5.71379 6.33071 6.20169 6.20034C6.33206 5.71244 6.58917 5.2677 6.94693 4.91126L7.18719 4.671C6.46348 4.63031 5.74116 4.7723 5.08669 5.08391C4.77018 5.74571 4.63207 6.46937 4.67235 7.18441V7.18584Z"
                              fill={darkMode ? '#F2F2F2' : '#1A2026'}
                            />
                            <path
                              d="M5.92995 3.8942C5.44181 4.38241 5.07791 4.9806 4.86878 5.63855C4.65966 6.29651 4.61142 6.99503 4.72812 7.67548C4.84482 8.35593 5.12305 8.99846 5.53945 9.54914C5.95585 10.0998 6.49827 10.5426 7.1212 10.8402L8.23619 9.7238C7.74839 9.59296 7.30363 9.33604 6.94659 8.97885C6.58955 8.62166 6.33281 8.17679 6.20217 7.68894C6.07153 7.20109 6.0716 6.68745 6.20236 6.19964C6.33313 5.71182 6.58998 5.26702 6.94711 4.90992L9.57561 2.27998C10.1155 1.74007 10.8478 1.43674 11.6114 1.43674C12.3749 1.43674 13.1072 1.74007 13.6471 2.27998C14.187 2.8199 14.4904 3.55218 14.4904 4.31574C14.4904 5.0793 14.187 5.81158 13.6471 6.3515L12.5062 7.49095C12.6674 8.0952 12.7292 8.72103 12.6904 9.34255L14.6643 7.36866C15.4738 6.55916 15.9285 5.46126 15.9285 4.31646C15.9285 3.17166 15.4738 2.07375 14.6643 1.26426C13.8548 0.454769 12.7569 0 11.6121 0C10.4673 0 9.36939 0.454769 8.55989 1.26426L5.92995 3.8942Z"
                              fill={darkMode ? '#F2F2F2' : '#1A2026'}
                            />
                            <path
                              d="M10.8417 10.8401C11.1546 10.1861 11.2972 9.46352 11.2561 8.73962L11.0158 8.97989C10.6594 9.33765 10.2146 9.59476 9.72672 9.72513C9.59634 10.213 9.33923 10.6578 8.98147 11.0142L8.74121 11.2545C9.46492 11.2952 10.1872 11.1532 10.8417 10.8416V10.8401Z"
                              fill={darkMode ? '#F2F2F2' : '#1A2026'}
                            />
                          </svg>

                          <span className="ml-2 mr-1 text-sm">
                            View Project
                          </span>
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.55556 3.55556C7.43768 3.55556 7.32464 3.60238 7.24129 3.68573C7.15794 3.76908 7.11111 3.88213 7.11111 4V6.66667C7.11111 6.78454 7.06429 6.89759 6.98094 6.98094C6.89759 7.06429 6.78454 7.11111 6.66667 7.11111H1.33333C1.21546 7.11111 1.10241 7.06429 1.01906 6.98094C0.935714 6.89759 0.888889 6.78454 0.888889 6.66667V1.33333C0.888889 1.21546 0.935714 1.10241 1.01906 1.01906C1.10241 0.935714 1.21546 0.888889 1.33333 0.888889H4C4.11787 0.888889 4.23092 0.842064 4.31427 0.758714C4.39762 0.675365 4.44444 0.562318 4.44444 0.444444C4.44444 0.32657 4.39762 0.213524 4.31427 0.130175C4.23092 0.0468252 4.11787 0 4 0H1.33333C0.979711 0 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 0 0.979711 0 1.33333V6.66667C0 7.02029 0.140476 7.35943 0.390524 7.60948C0.640573 7.85952 0.979711 8 1.33333 8H6.66667C7.02029 8 7.35943 7.85952 7.60948 7.60948C7.85952 7.35943 8 7.02029 8 6.66667V4C8 3.88213 7.95318 3.76908 7.86983 3.68573C7.78648 3.60238 7.67343 3.55556 7.55556 3.55556Z"
                              fill={darkMode ? '#F2F2F2' : '#1A2026'}
                            />
                            <path
                              d="M5.77778 0.888889H6.48L3.68444 3.68C3.64279 3.72132 3.60972 3.77047 3.58716 3.82463C3.5646 3.87879 3.55298 3.93688 3.55298 3.99556C3.55298 4.05423 3.5646 4.11232 3.58716 4.16648C3.60972 4.22064 3.64279 4.26979 3.68444 4.31111C3.72576 4.35277 3.77492 4.38583 3.82908 4.4084C3.88324 4.43096 3.94133 4.44258 4 4.44258C4.05867 4.44258 4.11676 4.43096 4.17092 4.4084C4.22508 4.38583 4.27424 4.35277 4.31556 4.31111L7.11111 1.52V2.22222C7.11111 2.3401 7.15794 2.45314 7.24129 2.53649C7.32464 2.61984 7.43768 2.66667 7.55556 2.66667C7.67343 2.66667 7.78648 2.61984 7.86983 2.53649C7.95318 2.45314 8 2.3401 8 2.22222V0.444444C8 0.32657 7.95318 0.213524 7.86983 0.130175C7.78648 0.0468252 7.67343 0 7.55556 0H5.77778C5.6599 0 5.54686 0.0468252 5.46351 0.130175C5.38016 0.213524 5.33333 0.32657 5.33333 0.444444C5.33333 0.562318 5.38016 0.675365 5.46351 0.758714C5.54686 0.842064 5.6599 0.888889 5.77778 0.888889Z"
                              fill={darkMode ? '#F2F2F2' : '#1A2026'}
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </>
                ))}
              </div>
            )}
            {awards?.length && (
              <div
                className={`pt-16 ${
                  otherResponsibilities?.length ? '' : 'lg:h-screen'
                }`}
                id="awards"
              >
                {awards?.map(award => (
                  <GenericTile
                    key={award.title}
                    title={award.title}
                    tags={[award.duration]}
                    description={award.description}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            )}
            {otherResponsibilities?.length && (
              <div className="pt-16 lg:h-screen" id="other">
                {otherResponsibilities?.map(responsibility => (
                  <GenericTile
                    key={responsibility.title}
                    title={responsibility.title}
                    tags={[responsibility.duration]}
                    description={responsibility.description}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </ThemeContext.Consumer>
  );
};

export default WorkExperienceRight;
