import React from "react";

const OtherProjects = () => {
  return (
    <section className="pj-continue flex flex-col items-center">
      <h2 className="font-size-h2">Other Noteworthy Projects</h2>
      <a
        href="https://github.com/KasiePatricia/"
        className="text-sm text-mGreen"
      >
        Other projects
      </a>
      <ul className="grid gap-4 relative mt-12">
        <li className="relative pointer">
          <div className="flex justify-between  flex-col relative h-full rounded bg-[#112240] overflow-auto py-8 px-7 box-showder-m">
            <header>
              <div className="flex justify-between items-center mb-9">
                <div className="text-mGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-folder"
                    className="w-5 h-5"
                  >
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex gap-2 items-center text-[#a8b2d1]">
                  <a
                    href="https://github.com/KasiePatricia/"
                    aria-label="GitHub Link"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    class="external"
                    target="_blank"
                    rel="noopener noreferrer"
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
              <h3 className="text-xl">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Integrating Algolia Search with WordPress Multisite
                </a>
              </h3>
              <div>
                <p className="text-[#a8b2d1]">
                  Building a custom multisite compatible WordPress plugin to
                  build global search with Algolia
                </p>
              </div>
            </header>
            <footer>
              <ul className="flex gap-3 flex-wrap text-xs mt-4">
                <li>Algolia</li>
                <li>WordPress</li>
                <li>PHP</li>
              </ul>
            </footer>
          </div>
        </li>
      </ul>
      <button className="btn text-mGreen bg-transparent border-mGreen mt-20">
        Show More
      </button>
    </section>
  );
};

export default OtherProjects;
