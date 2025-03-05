import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-blue-500">My Portfolio</h1>
      <div className="flex space-x-4">
        <Link className="hover:text-blue-500" to="/">Home</Link>
        <Link className="hover:text-blue-500" to="/projects">Projects</Link>
        <Link className="hover:text-blue-500" to="/skills">Skills</Link>
        <Link className="hover:text-blue-500" to="/contact">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
