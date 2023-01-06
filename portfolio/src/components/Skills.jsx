import React from "react";
import styles from "../style";
import {
  DiPython,
  DiCss3,
  DiSass,
  DiHtml5,
  DiGithubBadge,
  DiReact,
  DiJsBadge,
  DiBootstrap,
} from "react-icons/di";
import { SiCplusplus, SiC, SiTailwindcss, SiMysql } from "react-icons/si";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Skills = () => (
  <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
    <section className={`overflow-hidden md:mt-0 mt-20 ${styles.marginX}`}>
      <div className={`${styles.heading2} text-center  my-5`}>Skills:</div>
      <div className={`flex flex-wrap justify-center ${styles.icons} `}>
        <DiPython className={`${styles.marginXIcons}`} title="Python" />
        <SiC className={`${styles.marginXIcons}`} title="C" />
        <SiCplusplus className={`${styles.marginXIcons}`} title="C++" />
        <DiHtml5 className={`${styles.marginXIcons}`} title="HTML5" />
        <DiCss3 className={`${styles.marginXIcons}`} title="CSS3" />
        <DiSass className={`${styles.marginXIcons}`} title="Sass" />
        <DiBootstrap className={`${styles.marginXIcons}`} title="Bootstrap 5" />
        <SiTailwindcss
          className={`${styles.marginXIcons}`}
          title="Tailwind CSS"
        />
        <DiJsBadge className={`${styles.marginXIcons}`} title="JavaScript" />
        <DiReact className={`${styles.marginXIcons}`} title="React.js" />
        <SiMysql className={`${styles.marginXIcons}`} title="MySQL" />
        <DiGithubBadge className={`${styles.marginXIcons}`} title="Github" />
      </div>
    </section>
  </AnimationOnScroll>
);

export default Skills;
