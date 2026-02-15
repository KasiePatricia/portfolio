import Rest from "../assets/images/rest.png";
import iValidate from "../assets/images/i-validate.png";
import wicrypt from "../assets/images/wicrypt.png";

const projects = [
  {
    title: "Wicrypt Website",
    description:
      "Decentralized Wi-Fi, Powered by You. Connect. Share. Earn. A decentralized network that brings internet access to anyone, anywhere.",
    tech: ["Next Js", "Tailwind CSS", "Playwright"],
    image: wicrypt,
    imageAlt: "Wicrypt Website Project",
    githubUrl: "",
    liveUrl: "https://wicrypt.com/",
  },
  {
    title: "Rest Countries API",
    description:
      "This application lists countries around the world using a REST API. It includes light and dark mode and supports searching by country name and region.",
    tech: ["React", "Vanilla CSS", "Git/GitHub"],
    image: Rest,
    imageAlt: "Rest Countries API Project",
    githubUrl: "https://github.com/KasiePatricia/rest-countries-api",
    liveUrl: "https://rest-countries-api-topaz-three.vercel.app",
  },
  {
    title: "i-Validate",
    description:
      "The Idea Validation app helps entrepreneurs and innovators validate ideas and understand their potential for success through guided validation tests. This is a cross-track collaborative Ada Project task.",
    tech: ["React", "Bootstrap CSS", "CSS", "Firebase", "EmailJS", "Zustand"],
    image: iValidate,
    imageAlt: "i-Validate Project",
    githubUrl:
      "https://github.com/ADA-Software-Engineering-Program/i-validate-landing-page",
    liveUrl: "https://i-validate-landing-page.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-[6.25rem]">
      <div>
        <h2 className="num-h2 flex items-center w-full mb-10 relative whitespace-nowrap font-size-h2 font-semibold leading-[1.1] text-[#ccd6f6]">
          Some Things I've built
        </h2>
      </div>
      <ul>
        {projects.map((project) => (
          <li
            key={project.title}
            className="pj-main relative grid grid-cols-12 gap-2.5 items-center mb-24"
          >
            <div className="pj-content relative">
              <div>
                <p className="text-[0.813rem] my-2.5 text-mGreen">Project</p>
                <h3 className="font-semibold font-size-title text-[#e6f1ff]  md:mb-5">
                  <a
                    href={project.liveUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {project.title}
                  </a>
                </h3>
                <div>
                  <p className="relative z-[2] py-5 md:p-6 rounded bg-transparent md:bg-[#112240] text-sm text-[#e6f181] md:box-showder-m">
                    {project.description}
                  </p>
                </div>
                <ul className="pj-tect-stack flex flex-wrap gap-3 relative z-[2] md:mt-6 mb-2.5 text-[0.813rem]">
                  {project.tech.map((item) => (
                    <li key={item} className="mb-1.5">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pj-links flex gap-3 relative mt-2.5 text-[#ccd6f6]">
                  <a
                    href={project.githubUrl}
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github w-5 h-5"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href={project.liveUrl}
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link w-5 h-5"
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
                href={project.liveUrl}
                target="_blank"
                className="w-full h-full rounded bg-mGreen"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="rounded h-full"
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
