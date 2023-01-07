import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "../style";

const About = () => (
  <AnimationOnScroll
    animateIn="animate__fadeInUp"
    animateOnce
    animatePreScroll={false}
  >
    <section className={`z-[1] overflow-hidden ${styles.marginX} `}>
      <div className={`${styles.heading2} my-5`}>Get to know me!</div>
      <div className={`${styles.paragraph}`}>
        I am a second-year computer science student, fascinated in creating
        websites and web applications. I am open to many technologies and new
        challenges, and I would like to gain my first commercial experience as a
        programmer. My other hobby is bodybuilding, I always give my best in
        everything i do <br /> <br />
        If you want to contact me, please write e-mail to me, I will reply as
        soon as possible. I am looking for an internship from July to September
        2023, or a part-time job that I could start right now
      </div>
    </section>
  </AnimationOnScroll>
);

export default About;
