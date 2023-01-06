import React from "react";
import { layout } from "./style";
import {
  Navbar,
  Hero,
  Experience,
  About,
  Skills,
  Contact,
  Footer,
  Sidebar,
} from "./components";

const App = () => (
  <div
    id="home"
    className="home__gradient w-full sm:overflow-visible overflow-hidden"
  >
    <Sidebar />
    <Navbar />
    <Hero />
    <div className={`${layout.section}`}>
      <div id="about_me">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </div>
    <div id="experience">
      <Experience />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <Footer />
  </div>
);

export default App;
