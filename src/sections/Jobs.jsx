import React from "react";

const roles = [
  {
    company: "Wicrypt",
    title: "Software Developer",
    period: "May 2023 - Present",
    link: "https://wicrypt.com/",
    points: [
      "Build and ship user-facing features across web and mobile products.",
      "Integrate APIs and improve performance, reliability, and usability.",
      "Collaborate with product, design, and engineering to deliver releases.",
    ],
  },
  {
    company: "Ayika",
    title: "React Native Developer",
    period: "April 2024 - January 2025",
    link: null,
    points: [
      "Developed cross-platform mobile features with React Native.",
      "Implemented responsive, accessible UI for a smooth user experience.",
      "Worked closely with designers to translate ideas into production apps.",
    ],
  },
  {
    company: "BetaKopa",
    title: "Junior Developer | Intern",
    period: "January - April 2023",
    link: "https://betakopa.com/",
    points: [
      "Designed and implemented responsive web interfaces.",
      "Worked with backend engineers and designers on product features.",
      "Translated business requirements into user-friendly web solutions.",
    ],
  },
];

const Jobs = () => {
  return (
    <section className="max-w-2xl pt-[6.25rem]" id="jobs">
      <div>
        <h2 className="num-h2 flex items-center w-full mb-10 relative whitespace-nowrap font-size-h2 ">
          Where I've Worked
        </h2>
      </div>
      <div className="flex flex-col gap-10">
        {roles.map((role) => (
          <div key={role.company} className="px-1.5 py-2.5 w-full">
            <h3 className="text-[#ccd6f6] mb-0.5 text-xl font-medium">
              <span>{role.title}</span>
              <span className="text-mGreen">
                &nbsp;@&nbsp;
                {role.link ? (
                  <a
                    href={role.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {role.company}
                  </a>
                ) : (
                  role.company
                )}
              </span>
            </h3>
            <p className="mb-6 text-[0.813rem]">{role.period}</p>
            <div>
              <ul className="mt-2 left_0 tech relative ">
                {role.points.map((point) => (
                  <li key={point} className="mb-2.5">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
