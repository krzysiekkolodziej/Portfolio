import React from "react";
import styles from "../style";
import Button from "./Button";
import { CV } from "../assets";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Hero = () => (
  <section className="overflow-hidden z-[1] md:m-40 sm:m-32 my-20 mx-8">
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      animateOnce
      animatePreScroll={false}
    >
      <div className={`gradient ${styles.paragraph}`}>Hi, my name is</div>
      <div className={styles.heading2}>
        Krzysztof Kolodziej. <br />
        <span className="text-dimWhite">I am software engineer</span>
      </div>
      <div className={`${styles.paragraph} my-2 md:max-w-[60%]`}>
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications that leads to the success of the overall product
      </div>

      <a href={CV} title="CV" target="_blank" rel="noreferrer noopener">
        <Button text="Download my CV!" />
      </a>
    </AnimationOnScroll>
  </section>
);

export default Hero;
