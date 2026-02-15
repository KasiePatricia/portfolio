import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed top-0 w-full px-4 md:px-8 bg-navBg backdrop-blur-mn h-navHeight z-40">
      <nav className="navbar text-[#ccd6f6] navBox relative z-[12]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#jobs">Experience</a>
              </li>
              <li>
                <a href="#projects">Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              {/* <li>
                <a className="btn text-mGreen bg-transparent border-mGreen">
                  Resume
                </a>
              </li> */}
            </ul>
          </div>
          <a
            className="btn btn-ghost normal-case text-xl text-mGreen"
            id="#home1"
          >
            Kassy
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ol className="menu menu-horizontal px-1 relative text-sm">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#jobs">Experience</a>
            </li>
            <li>
              <a href="#projects">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>
        </div>
        <div className="navbar-end">
          <a
            href="https://www.canva.com/design/DAFfI894efQ/i53zZCtlSYpgnqI5QHHQHA/view?utm_content=DAFfI894efQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
            className="btn text-mGreen bg-transparent border-mGreen"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
