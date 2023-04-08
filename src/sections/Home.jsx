import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col min-h-screen items-start justify-center pt-[6.25rem] pb-0">
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
          I build this for the web
        </h3>
      </div>
      <div>
        <p className="mt-5 max-w-[33.75rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ex, id
          est dolorum magnam animi tempore molestiae atque nihil cum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates.{" "}
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
