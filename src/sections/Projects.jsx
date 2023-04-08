import React from "react";
import Pj from "../assets/images/pj.png";
import Rest from "../assets/images/rest.png";
import iValidate from "../assets/images/i-validate.png";

const Projects = () => {
  return (
    <section>
      <div>
        <h2 className="num-h2 flex items-center w-full mb-10 relative whitespace-nowrap font-size-h2 font-semibold leading-[1.1] text-[#ccd6f6]">
          Some Things I've built
        </h2>
      </div>
      <ul>
        <li className="pj-main relative grid grid-cols-12 gap-2.5 items-center mb-24">
          <div className="pj-content relative">
            <div>
              <p className="text-[0.813rem] my-2.5 text-mGreen">Project</p>
              <h3 className="font-semibold font-size-title text-[#e6f1ff]  md:mb-5">
                <a
                  href="https://rest-countries-api-topaz-three.vercel.app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Rest Countries API
                </a>
              </h3>
              <div>
                <p className="relative z-[2] py-5 md:p-6 rounded bg-transparent md:bg-[#112240] md:box-showder-m">
                  This is a project that shows all the countries of the world
                  using an API call. It has features like light and dark mode.
                  You can be able to search a country with it's name and by it's
                  continent
                </p>
              </div>
              <ul className="pj-tect-stack flex flex-wrap gap-3 relative z-[2] md:mt-6 mb-2.5 text-[0.813rem]">
                <li className="mb-1.5">React</li>
                <li className="mb-1.5">Vanilla CSS</li>
                <li className="mb-1.5">Git/GitHub</li>
              </ul>
              <div className="pj-links flex gap-3 relative mt-2.5 text-[#ccd6f6]">
                <a
                  href="https://github.com/KasiePatricia/rest-countries-api"
                  aria-label="GitHub Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                    className="w-5 h-5"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://rest-countries-api-topaz-three.vercel.app"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-external-link"
                    className="w-5 h-5"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pj-img relative z-[1]">
            <a
              href="#"
              target="_blank"
              className="w-full h-full rounded bg-mGreen"
            >
              <img src={Rest} alt="Project Image" className="rounded h-full" />
            </a>
          </div>
        </li>
        <li className="pj-main relative grid grid-cols-12 gap-2.5 items-center mb-24">
          <div className="pj-content relative">
            <div>
              <p className="text-[0.813rem] my-2.5 text-mGreen">Project</p>
              <h3 className="font-semibold font-size-title text-[#e6f1ff] md:mb-5">
                <a
                  href="https://i-validate-landing-page.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  i-Validate
                </a>
              </h3>
              <div>
                <p className="relative z-[2] py-5 md:p-6 rounded bg-transparent md:bg-[#112240] md:box-showder-m">
                  The Idea Validation app is designed to help entrepreneurs and
                  innovators validate their ideas and determine whether they
                  have potential for success. The app offers various validation
                  tests that provide insights and feedback based on the results.
                  This is a cross-track collaborative Ada Project task.
                </p>
              </div>
              <ul className="pj-tect-stack flex flex-wrap gap-3 relative z-[2] md:mt-6 mb-2.5 text-[0.813rem]">
                <li className="mb-1.5">React</li>
                <li className="mb-1.5">Bootstrap CSS</li>
                <li className="mb-1.5">CSS</li>
                <li className="mb-1.5">Firebase</li>
                <li className="mb-1.5">EmailJS</li>
                <li className="mb-1.5">Zustand</li>
              </ul>
              <div className="pj-links flex gap-3 relative mt-2.5 text-[#ccd6f6]">
                <a
                  href="https://github.com/ADA-Software-Engineering-Program/i-validate-landing-page"
                  aria-label="GitHub Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                    className="w-5 h-5"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://i-validate-landing-page.vercel.app/"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-external-link"
                    className="w-5 h-5"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pj-img relative z-[1]">
            <a
              href="#"
              target="_blank"
              className="w-full h-full rounded bg-mGreen"
            >
              <img
                src={iValidate}
                alt="Project Image"
                className="rounded h-full"
              />
            </a>
          </div>
        </li>
        <li className="pj-main relative grid grid-cols-12 gap-2.5 items-center mb-24">
          <div className="pj-content relative">
            <div>
              <p className="text-[0.813rem] my-2.5 text-mGreen">Project</p>
              <h3 className="font-semibold font-size-title text-[#e6f1ff] md:text-[#989ca9] md:mb-5">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  Halcyon Theme
                </a>
              </h3>
              <div>
                <p className="relative z-[2] py-5 md:p-6 rounded bg-transparent md:bg-[#112240] md:box-showder-m">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace
                  Package Control Atom Package Manager npm
                </p>
              </div>
              <ul className="pj-tect-stack flex flex-wrap gap-3 relative z-[2] md:mt-6 mb-2.5 text-[0.813rem]">
                <li className="mb-1.5">VS Code</li>
                <li className="mb-1.5">Sublime Text</li>
                <li className="mb-1.5">Atom</li>
                <li className="mb-1.5">iTerm2</li>
              </ul>
              <div className="pj-links flex gap-3 relative mt-2.5 text-[#ccd6f6]">
                <a
                  href="#"
                  aria-label="GitHub Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                    className="w-5 h-5"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-external-link"
                    className="w-5 h-5"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pj-img relative z-[1]">
            <a
              href="#"
              target="_blank"
              className="w-full h-full rounded bg-mGreen"
            >
              <img src={Pj} alt="Project Image" className="rounded h-full" />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
