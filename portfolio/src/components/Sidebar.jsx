import React from "react";
import styles from "../style";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Sidebar = () => (
  <section className="fixed top-[40%] sm:visible invisible overflow-auto">
    <div className={`${styles.socialIcons} flex flex-col`}>
      <a
        href="https://www.linkedin.com/in/krzysztof-kolodziej/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsLinkedin className="m-2" title="LinkedIn" />
      </a>
      <a
        href="https://www.facebook.com/KrzysiekKolodz/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsFacebook className="m-2" title="Facebook" />
      </a>
      <a
        href="https://github.com/krzysiekkolodziej"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsGithub className="m-2" title="Github" />
      </a>
    </div>
  </section>
);

export default Sidebar;
