// Data loader utility to handle private vs template data
import privateData from "../data/contents.private.json";
import templateData from "../data/contents.template.json";

// Default fallback data
const fallbackData = {
  personal: {
    name: "Portfolio Owner",
    role: "Developer",
    bio: "Portfolio data not found.",
    imageUrl: "",
    resume: "#",
    portfolio: "#",
    skills: {
      programmingLanguages: [],
      database: [],
      backend: [],
      frontend: [],
      versionControl: [],
      otherTools: [],
    },
    social: {
      email: "contact@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  projects: [],
  experience: [],
  certifications: [],
  achievements: [],
};

// Use private data if available, otherwise fallback to template or default
let contents;

try {
  // Check if private data has real content (not just placeholder)
  if (privateData.personal.name !== "Your Name") {
    contents = privateData;
  } else {
    contents = templateData;
  }
} catch (error) {
  contents = fallbackData;
}

export default contents;
