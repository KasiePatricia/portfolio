import React from "react";
import Home from "../sections/Home";
import SideLeft from "../sections/SideLeft";
import SideRight from "../sections/SideRight";
import Header from "../components/Header";
import About from "../sections/About";
import Jobs from "../sections/Jobs";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";
import Contact from "../sections/Contact";
import OtherProjects from "../sections/OtherProjects";

const Landing = () => {
  return (
    <div className="">
      <Header />
      <SideLeft />
      <SideRight />
      <main className="px-36 main">
        <Home />
        <About />
        <Jobs />
        <Projects />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
