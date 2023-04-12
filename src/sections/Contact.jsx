import React from "react";

const Contact = () => {
  return (
    <section
      className="contact text-center max-w-[37.5rem] mt-0 mx-auto mb-[6.25rem] pt-[6.25rem]"
      id="contact"
    >
      <h2 className="mb-5 text-mGreen text-base contact-num-h2">What's Next</h2>
      <h2 className="mb-5 font-semibold leading-[1.1] text-[#ccd6f6] font-size-title2">
        Get In Touch
      </h2>
      <p>
        I am open to new opportunities and welcome any potential collaboration
        or partnership. If you believe that I can be a valuable asset to your
        team or project, please don't hesitate to reach out to me. I am excited
        to explore how we can work together to achieve our goals.
      </p>
      <a
        href="mailto:ugwukasiep@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
        className="btn text-mGreen bg-transparent border-mGreen mt-12"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
