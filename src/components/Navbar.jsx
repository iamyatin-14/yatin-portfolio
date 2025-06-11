import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import contents from "../utils/dataLoader";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const CustomNavLink = ({ to, children, ...props }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative px-3 py-2 text-gray-300 hover:text-white transition-colors ${
        isActive
          ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:rounded-full"
          : ""
      }`
    }
    {...props}
  >
    {children}
  </NavLink>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { personal } = contents;

  // Add safety checks for undefined data
  const safePersonal = personal || {};
  const safeSocial = safePersonal.social || {};

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            {safePersonal.name ? safePersonal.name.split(" ")[0] : "Portfolio"}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/projects">Projects</CustomNavLink>
            <CustomNavLink to="/experience">Experience</CustomNavLink>
            <CustomNavLink to="/contact">Contact</CustomNavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-blue-400 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={safeSocial.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={safeSocial.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${safeSocial.email || "contact@example.com"}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4 border border-gray-800">
            <div className="flex flex-col space-y-2">
              <CustomNavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </CustomNavLink>
              <CustomNavLink to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </CustomNavLink>
              <CustomNavLink to="/experience" onClick={() => setIsOpen(false)}>
                Experience
              </CustomNavLink>
              <CustomNavLink to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </CustomNavLink>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href={safeSocial.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={safeSocial.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={`mailto:${safeSocial.email || "contact@example.com"}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
