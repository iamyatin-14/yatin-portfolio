import { Link } from "react-router-dom";
import contents from "../utils/dataLoader";

const getSkillIcon = (skill) => {
  const iconMap = {
    // Programming Languages
    Java: "java/java-original-wordmark.svg",
    C: "c/c-original.svg",
    "C++": "cplusplus/cplusplus-original.svg",
    Python: "python/python-original-wordmark.svg",

    // Database
    MySQL: "mysql/mysql-original-wordmark.svg",
    MongoDB: "mongodb/mongodb-original-wordmark.svg",

    // Backend
    Spring: "spring/spring-original-wordmark.svg",
    Firebase: "firebase/firebase-plain-wordmark.svg",

    // Frontend
    HTML: "html5/html5-original-wordmark.svg",
    CSS: "css3/css3-original-wordmark.svg",
    JavaScript: "javascript/javascript-original.svg",
    React: "react/react-original-wordmark.svg",

    // Version Control
    Git: "git/git-original-wordmark.svg",
    GitHub: "github/github-original-wordmark.svg",

    // Tools
    "VS Code": "vscode/vscode-original.svg",
    Figma: "figma/figma-original.svg",
    Canva: "canva/canva-original.svg",
  };
  return iconMap[skill];
};

const Home = () => {
  const { personal, achievements } = contents;

  // Add safety checks for undefined data
  const safePersonal = personal || {};
  const safeSkills = safePersonal.skills || {};
  const safeAchievements = achievements || [];

  const getResumeUrl = (url) => {
    if (!url) return "#";
    return url.startsWith("http") ? url : `https://${url}`;
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(
      getResumeUrl(safePersonal.resume),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-12 sm:mb-16">
          {safePersonal.imageUrl && (
            <img
              src={safePersonal.imageUrl}
              alt={safePersonal.name || "Profile"}
              className="aspect-square w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover mb-6 md:mb-0 md:mr-8 lg:mr-12 shadow-lg"
              onError={(e) => {
                e.target.src = "/fallback-profile.png"; // Ensure this fallback image exists in public/
              }}
            />
          )}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              {safePersonal.name || "Your Name"}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 sm:mb-6 lg:mb-8">
              {safePersonal.role || "Your Role"}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
              {safePersonal.bio || "Your bio description here."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/projects"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                View Projects
              </Link>
              <button
                onClick={handleResumeClick}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>View Resume</span>
              </button>
              <Link
                to="/contact"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-gray-800/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
              Skills
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {Object.entries(safeSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-base sm:text-lg font-medium text-white mb-2 sm:mb-3">
                    {category.replace(/([a-z])([A-Z])/g, "$1 $2")}
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {Array.isArray(skills) &&
                      skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2 bg-blue-900/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-blue-800"
                        >
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${getSkillIcon(
                              skill
                            )}`}
                            alt={skill}
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                          <span className="text-blue-200 text-xs sm:text-sm font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        {safeAchievements.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="bg-gray-800/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {safeAchievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`bg-gray-700/50 p-4 sm:p-6 rounded-lg border border-gray-600 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-blue-500/20 ${
                      index === safeAchievements.length - 1 &&
                      safeAchievements.length % 2 !== 0
                        ? "md:col-span-2 md:max-w-2xl md:mx-auto"
                        : ""
                    }`}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <span className="text-2xl sm:text-3xl">
                        {achievement.icon}
                      </span>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-300 mb-2">
                          {achievement.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-blue-400">
                            {achievement.category}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-400">
                            {achievement.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
