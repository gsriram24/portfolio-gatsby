import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import GenericTile from './GenericTile';
const WorkExperienceTile = ({ exp, darkMode }) => {
  const tileVariants = {
    hidden: {},
    hover: {
      scale: 1.1,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };
  return (
    <Link to={`/experience/${exp.slug}`}>
      <motion.div initial="hidden" variants={tileVariants} whileHover="hover">
        <GenericTile
          key={exp.slug}
          tags={[exp.duration]}
          description={exp.summary}
          title={exp.companyName}
          darkMode={darkMode}
        />
      </motion.div>
    </Link>
  );
};

export default WorkExperienceTile;
