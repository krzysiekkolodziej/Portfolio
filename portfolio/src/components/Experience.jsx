import React from "react";
import styles from "../style";
import { expLinks } from "../constants";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Experience = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
      <section className="overflow-hidden z-[1] flex flex-col sm:m-20 m-2 mt-20 sm:text-justify text-start">
        <div className={`${styles.heading2} text-center`}>Experience</div>
        <div className="flex flex-row justify-center">
          <div className={`flex flex-col ${styles.paragraph}`}>
            {expLinks.map((exp) => (
              <ul className="text-white m-6 px-4 pb-4 gradient__border sm:border-r-[0] " key={exp.id}>
                <li  className="flex sm:flex-row flex-col">
                  <div
                    className="sm:min-w-[20%] min-w-[25%] sm:text-left text-center mb-5 block"
                    
                  >
                    {exp.title}
                  </div>
                  <ul className="text-dimWhite ">
                    <li className="m-1">
                      {" "}
                      {exp.duration}{" "}
                    </li>
                    <li className="m-1">
                      {" "}
                      {exp.content1}{" "}
                    </li>
                    <li className="m-1">
                      {" "}
                      {exp.content2}{" "}
                    </li>
                    <li className="m-1">
                      {" "}
                      {exp.content3}{" "}
                    </li>
                    <li className="m-1">
                      {" "}
                      {exp.content4}{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  );
};

export default Experience;
