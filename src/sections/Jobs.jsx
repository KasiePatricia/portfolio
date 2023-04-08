import React from "react";

const Jobs = () => {
  return (
    <section className="max-w-2xl">
      <div>
        <h2 className="num-h2 flex items-center w-full mb-10 relative whitespace-nowrap font-size-h2 ">
          Where I've Worked
        </h2>
      </div>
      <div className="flex">
        <div className="relative z-10 w-max">
          <button className="flex items-center w-full relative h-[2.625rem] pb-[0.125rem] px-[1.25rem] border-s-2 border-s-[#233554] text-left whitespace-nowrap text-[0.813rem] hover:border-mGreen active:border-mGreen focus:border-mGreen hover:text-mGreen hover:outline-0 active:text-mGreen active:outline-0 focus:text-mGreen focus:outline-0 hover:bg-[#112243] focus:bg-[#112243]">
            <span>BetaKopa</span>
          </button>
          <button className="flex items-center w-full relative h-[2.625rem] pb-[0.125rem] px-[1.25rem] border-s-2 border-s-[#233554] text-left whitespace-nowrap text-[0.813rem] hover:border-mGreen active:border-mGreen focus:border-mGreen hover:text-mGreen hover:outline-0 active:text-mGreen active:outline-0 focus:text-mGreen focus:outline-0 hover:bg-[#112243] focus:bg-[#112243]">
            <span>Top Universe</span>
          </button>
          <button className="flex items-center w-full relative h-[2.625rem] pb-[0.125rem] px-[1.25rem] border-s-2 border-s-[#233554] text-left whitespace-nowrap text-[0.813rem] hover:border-mGreen active:border-mGreen focus:border-mGreen hover:text-mGreen hover:outline-0 active:text-mGreen active:outline-0 focus:text-mGreen focus:outline-0 hover:bg-[#112243] focus:bg-[#112243]">
            <span>Comag</span>
          </button>
        </div>
        <div className="relative w-full ml-5">
          <div className="px-1.5 py-2.5 w-full">
            <h3 className="text-[#ccd6f6] mb-0.5 text-xl font-medium">
              <span>Junior Developer | Intern</span>
              <span className="text-mGreen">
                &nbsp;@&nbsp;
                <a
                  href="https://betakopa.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Betakopa
                </a>
              </span>
            </h3>
            <p className="mb-6 text-[0.813rem]">January - April 2018</p>
            <div>
              <ul className="mt-2 left_0 tech relative ">
                <li className="mb-2.5">
                  Worked with a team of three designers to build a marketing
                  website and e-commerce platform for , an ambitious startup
                  originating from Northeastern
                </li>
                <li className="mb-2.5">
                  Helped solidify a brand direction for blistabloc that spans
                  both packaging and web
                </li>
                <li className="mb-2.5">
                  Interfaced with clients on a weekly basis, providing
                  technological expertise
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
