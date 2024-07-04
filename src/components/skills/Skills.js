'use client';
import { useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Popper from '@mui/material/Popper';
import styles from "./Skills.module.css";
import html5 from "../../assets/logos/html5.svg";
import css3 from "../../assets/logos/css3.svg";
import javascript from "../../assets/logos/javascript.svg";
import react from "../../assets/logos/react.svg";
import next from "../../assets/logos/next.svg";
import azure from "../../assets/logos/azure.svg";
import git from "../../assets/logos/git.svg";
import github from "../../assets/logos/github.svg";
import vscode from "../../assets/logos/vscode.svg";
import slack from "../../assets/logos/slack.svg";
import trello from "../../assets/logos/trello.svg";

const skillsList = [
  { name: "HTML 5", logo: html5 },
  { name: "CSS 3", logo: css3 },
  { name: "JavaScript", logo: javascript },
  { name: "React", logo: react },
  { name: "Next.js", logo: next },
  { name: "Azure", logo: azure },
  { name: "Git", logo: git },
  { name: "GitHub", logo: github },
  { name: "VS Code", logo: vscode },
  { name: "Slack", logo: slack },
  { name: "Trello", logo: trello },
];

const Skills = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentSkill, setCurrentSkill] = useState('');

  const handleMouseEnter = (event, skill) => {
    setAnchorEl(event.currentTarget);
    setCurrentSkill(skill);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setCurrentSkill('');
  };

  return (
    <motion.section
      className={styles.skills}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Habilidades
      </motion.h2>
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {skillsList.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.imageWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            onMouseEnter={(event) => handleMouseEnter(event, skill.name)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={40}
              height={40}
            />
          </motion.div>
        ))}
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement="top"
          disablePortal={false}
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
          ]}
        >
          <div className={styles.popper}>{currentSkill}</div>
        </Popper>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
