import React from "react";

const Home = () => {
  return (
    <section
      className="flex flex-col min-h-screen items-start justify-center pt-[6.25rem] pb-0"
      id="home1"
    >
      <div>
        <h2 className="mb-4 text-mGreen font-normal font-size-m">
          Hi, my name is
        </h2>
      </div>
      <div>
        <h1 className="font-size-m2">Kasie Ugwu</h1>
      </div>
      <div>
        <h3 className="font-size-m2 font-semibold text-[#8892b0] leading-[0.9]">
          I build things for the web
        </h3>
      </div>
      <div>
        <p className="mt-5 max-w-[33.75rem]">
          I'm a software developer specializing in creating innovative solutions
          for all your digital needs. I design and develop custom software
          applications tailored to meet the specific needs of my clients.
        </p>
      </div>
      <div>
        <button className="btn text-mGreen bg-transparent border-mGreen mt-8">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Home;
