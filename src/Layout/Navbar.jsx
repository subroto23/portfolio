import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { RiShieldUserFill } from "react-icons/ri";
import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlineContactEmergency } from "react-icons/md";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50
        ? setStickyClass(
            `fixed top-0 transition bg-[#181a27] bg-opacity-60 duration-1000 ease-in-out`
          )
        : setStickyClass("");
    }
  };

  //Navlik Active Class
  const activeRouteStyle = ({ isActive }) => {
    return {
      color: isActive ? "#7600fa" : "",
      fontWeight: isActive ? "bold" : "",
    };
  };

  const navLink = (
    <>
      <NavLink
        style={activeRouteStyle}
        className="mx-5 text-lg mb-2 after:border-[#7600fa] font-medium after:block after:border-b-4 after:transform after:scale-x-0 after:duration-300 ease-in-out hover:after:scale-x-100"
        to="/"
      >
        <span className="flex items-center">
          <span className="mr-2">
            <IoHomeOutline />
          </span>
          Home
        </span>
      </NavLink>
      <NavLink
        style={activeRouteStyle}
        className="mx-5 text-lg mb-2 after:border-[#7600fa] font-medium after:block after:border-b-4 after:transform after:scale-x-0 after:duration-300 ease-in-out hover:after:scale-x-100"
        to="/skill"
      >
        <span className="flex items-center">
          <span className="mr-2">
            <GiSkills />
          </span>
          Skillset
        </span>
      </NavLink>
      <NavLink
        style={activeRouteStyle}
        className="mx-5 text-lg mb-2 after:border-[#7600fa] font-medium after:block after:border-b-4 after:transform after:scale-x-0 after:duration-300 ease-in-out hover:after:scale-x-100"
        to="/about"
      >
        <span className="flex items-center">
          <span className="mr-2">
            <RiShieldUserFill />
          </span>
          About
        </span>
      </NavLink>
      <NavLink
        style={activeRouteStyle}
        className="mx-5 text-lg mb-2 after:border-[#7600fa] font-medium after:block after:border-b-4 after:transform after:scale-x-0 after:duration-300 ease-in-out hover:after:scale-x-100"
        to="/contact"
      >
        <span className="flex items-center">
          <span className="mr-2">
            <MdOutlineContactEmergency />
          </span>
          Contact Me
        </span>
      </NavLink>
    </>
  );
  return (
    <div className={`${stickyClass} w-full text-white z-50`}>
      <div
        className={`navbar py-4 flex justify-between items-center max-w-screen-xl mx-auto `}
      >
        <div className={`navbar-start`}>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaAlignJustify />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] py-2 shadow bg-[#000B1F] rounded-lg w-52"
            >
              {navLink}
            </ul>
          </div>
          <div className="flex">
            <Link className="flex text-xl">
              <img src={logo} alt="Logo" className="w-6" />
              <span>ubroto</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
            <button className="mx-5 text-lg mb-2 after:border-[#7600fa] font-medium after:block after:border-b-4 after:transform after:scale-x-0 after:duration-300 ease-in-out hover:after:scale-x-100">
              <span className="flex items-center">
                <span className="mr-2">
                  <IoDocumentOutline />
                </span>
                <a
                  href="../assets/resume/Resume Creating Very Soon.pdf"
                  download="Subroto-Das-Resume.pdf"
                >
                  Resume
                </a>
              </span>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
