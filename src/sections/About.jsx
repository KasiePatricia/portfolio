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
      <div className="grid grid-cols-5 gap-12 ">
        <div className="col-span-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            quod pariatur amet assumenda modi architecto maiores doloremque,
            eligendi unde corrupti dignissimos iste consectetur repudiandae
            laudantium similique? Exercitationem aliquam molestias suscipit
            perferendis fugiat eveniet molestiae animi? Eaque tempore,
            dignissimos minima dolores, exercitationem molestias eligendi modi
            voluptate ut, placeat minus laborum nulla. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sit consectetur repellendus eius.
            Adipisci enim dolorem voluptatem perferendis. Vero ullam voluptatem
            inventore asperiores quidem soluta impedit ab harum temporibus,
            suscipit ex? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Deleniti numquam assumenda consequuntur inventore impedit qui
            vero laboriosam fugiat dolore explicabo!
          </p>
          <p className="mt-3">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="mt-2 tech relative">
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue Js</li>
          </ul>
        </div>
        <div className="col-span-2 relative max-w-[18.75rem]">
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
