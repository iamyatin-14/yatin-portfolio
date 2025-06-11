import contents from "../utils/dataLoader";

const Experience = () => {
  const { experience, certifications } = contents;

  // Add safety checks for undefined data
  const safeExperience = experience || [];
  const safeCertifications = certifications || [];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Experience & Certifications
      </h1>

      {/* Experience Section */}
      {safeExperience.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center md:text-left">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {safeExperience.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-blue-500/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {job.title || "Job Title"}
                      </h3>
                      <p className="text-blue-400">
                        {job.company || "Company Name"}
                      </p>
                      <p className="text-gray-400">
                        {job.location || "Location"}
                      </p>
                    </div>
                    <p className="text-gray-300 mt-2 md:mt-0">
                      {job.startDate || "Start Date"}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {Array.isArray(job.responsibilities) &&
                      job.responsibilities.map((responsibility, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{responsibility}</span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {safeCertifications.length > 0 && (
        <section>
          <h2 className="text-3xl font-semibold text-white mb-8 text-center md:text-left">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeCertifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-blue-500/20"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {cert.name || "Certification Name"}
                </h3>
                <p className="text-gray-200 mb-1">
                  Issued by: {cert.issuer || "Issuing Organization"}
                </p>
                <p className="text-gray-300 text-sm">
                  Date: {cert.date || "Date"}
                </p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-400 hover:underline"
                  >
                    View Credential &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Experience;
