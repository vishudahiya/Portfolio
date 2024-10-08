import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full font-poppins md:mt-6 md:px-16">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-20">
        <div>
          <div className="flex items-center justify-between py-4 md:py-5 md:block px-2">
            {/* <NavLink to="/"> */}
            <h2 className="text-3xl ">Vishal Dahiya</h2>
            {/* </NavLink> */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 md:text-text-medium">
              <li className="md:hover:text-slate-400 md:hover:underline md:underline-offset-8 md:cursor-pointer">
                {/* <NavLink to="about"> */}
                <p>About</p>
                {/* </NavLink> */}
              </li>
              <li className="md:hover:text-slate-400 md:hover:underline md:underline-offset-8 md:cursor-pointer">
                {/* <NavLink to="experience"> */}
                <p>Experience</p>
                {/* </NavLink> */}
              </li>

              {/* <li className="md:hover:text-slate-400 md:hover:underline md:underline-offset-8 md:cursor-pointer">
                <NavLink to="project">
                  <p>Projects</p>
                </NavLink>
              </li> */}
              <li className="md:hover:text-slate-400 md:hover:underline md:underline-offset-8 md:cursor-pointer">
                {/* <NavLink to="contact"> */}
                <p>Contact</p>
                {/* </NavLink> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
