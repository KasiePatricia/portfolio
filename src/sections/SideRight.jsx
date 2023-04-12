import React from "react";

const SideLeft = () => {
  return (
    <div className="fixed bottom-0 right-5 left-auto lg:right-10 w-10 z-[10] text-[#a8b2d1] hidden md:block">
      <ul className="flex items-center flex-col icon-side side">
        <li>
          <a
            href="mailto:ugwukasiep@gmail.com"
            className="text-xs tracking-[0.25em] side-right"
          >
            ugwukasiep@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideLeft;
