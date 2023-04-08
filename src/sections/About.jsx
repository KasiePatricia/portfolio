import React from "react";
import Kassy from "../assets/images/Kassy.jpg";

const About = () => {
  return (
    <section className="pt-[6.25rem]" id="about">
      <div>
        <h2 className="num-h2 flex items-center w-full mb-10 relative whitespace-nowrap font-size-h2">
          About Me
        </h2>
      </div>
      <div className="block md:grid grid-cols-5 gap-12 ">
        <div className="col-span-3">
          <p>
            I'm a software developer who started her journey in tech just last
            year. Despite being relatively new to the field, I have made
            significant strides in my career by taking up trainings and gaining
            hands-on experience in various areas of technology.
          </p>
          <p className="mt-2">
            My hands-on experience in these areas has given me a strong
            foundation to build upon and has prepared me well for future
            projects.
          </p>
          <p className="mt-2">
            My proficiency in JavaScript frameworks has enabled me to create
            stunning and responsive web applications that deliver a seamless
            user experience.
          </p>
          <p className="mt-3">
            Here are a few technologies I've been working with recently:
          </p>
          <div className="flex flex-wrap gap-12">
            <ul className="mt-2 tech relative">
              <li>JavaScript</li>
              <li>React</li>
              <li>Vue Js</li>
            </ul>
            <ul className="mt-2 tech relative">
              <li>Tailwind CSS</li>
              <li>Bootstrap CSS</li>
              <li>SASS</li>
            </ul>
            <ul className="mt-2 tech relative">
              <li>Nuxt.Js</li>
              <li>HTML</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 relative w-[70%] m-auto mt-12 md:mt-0 md:max-w-[18.75rem]">
          <div className="mypic relative">
            <img
              src={Kassy}
              alt="My picture"
              className="rounded z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
