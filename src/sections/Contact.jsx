import React from "react";

const Contact = () => {
  return (
    <section className="contact text-center max-w-[37.5rem] mt-0 mx-auto mb-[6.25rem]">
      <h2 className="mb-5 text-mGreen text-base contact-num-h2">What's Next</h2>
      <h2 className="mb-5 font-semibold leading-[1.1] text-[#ccd6f6] font-size-title2">
        Get In Touch
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        voluptatem fugiat rem accusamus aspernatur omnis rerum quia amet tempora
        voluptatibus.
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
