import { useState, useEffect } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(localStorage.theme === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;
