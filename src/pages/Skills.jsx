function Projects() {
  const projects = [
    { title: "Portfolio", link: "https://myportfolio.com" },
    { title: "E-commerce App", link: "https://ecommerce.com" },
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <ul className="mt-4 space-y-3">
        {projects.map((proj, index) => (
          <li key={index} className="text-blue-500 hover:underline">
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              {proj.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
