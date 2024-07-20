import React, { useState, useEffect } from "react";
import * as feather from "feather-icons";

const TechStackSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(isDarkMode);
    feather.replace();
  }, []);

  useEffect(() => {
    feather.replace();
  }, [darkMode]);

  const categories = [
    {
      name: "Frontend",
      icon: "layout",
      color: "bg-blue-500",
      image:
        "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: [
        "React",
        "TypeScript",
        "JavaScript",
        "Progressive Web Apps (PWA)",
      ],
    },
    {
      name: "Backend",
      icon: "server",
      color: "bg-green-500",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: [
        "Python (FastAPI, Django, Flask)",
        "Java (Spring Boot)",
        "Node.js (NestJS, Express.js)",
      ],
    },
    {
      name: "Databases",
      icon: "database",
      color: "bg-yellow-500",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Realtime Database"],
    },
    {
      name: "Cloud Platforms",
      icon: "cloud",
      color: "bg-purple-500",
      image:
        "https://images.unsplash.com/photo-1519414442781-fbd745c5b497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: [
        "Google Cloud Platform (GCP)",
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Firebase",
      ],
    },
    {
      name: "DevOps",
      icon: "git-merge",
      color: "bg-red-500",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: ["CI/CD Pipelines", "Docker", "Kubernetes", "Terraform"],
    },
    {
      name: "Chatbot Development",
      icon: "message-square",
      color: "bg-indigo-500",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: [
        "NLP libraries (NLTK, spaCy)",
        "Machine Learning (TensorFlow, PyTorch)",
        "Dialog management (Rasa)",
      ],
    },
    {
      name: "Business Process Automation",
      icon: "settings",
      color: "bg-pink-500",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: [
        "Workflow automation (Zapier, n8n)",
        "RPA (UiPath, Automation Anywhere)",
      ],
    },
    {
      name: "Analytics",
      icon: "bar-chart-2",
      color: "bg-teal-500",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: [
        "Data visualization (Tableau, Power BI)",
        "Web analytics (Google Analytics)",
        "Big data (Apache Spark)",
        "Machine Learning (Scikit-learn)",
      ],
    },
    {
      name: "Version Control",
      icon: "git-branch",
      color: "bg-orange-500",
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: ["GitHub", "GitLab", "Bitbucket"],
    },
    {
      name: "API Development and Testing",
      icon: "code",
      color: "bg-cyan-500",
      image:
        "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: ["Swagger/OpenAPI", "Postman"],
    },
    {
      name: "Monitoring and Logging",
      icon: "activity",
      color: "bg-lime-500",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: ["ELK Stack", "Prometheus", "Grafana"],
    },
    {
      name: "Security",
      icon: "shield",
      color: "bg-red-600",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techs: ["OAuth 2.0", "JWT", "SSL/TLS", "Penetration Testing"],
    },
  ];
  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-t from-transparent via-blue-500 to-transparent ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* <div className="flex justify-between items-center mb-12"> */}
        <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400">
          Our Tech Stack
        </h2>{" "}
        {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode
                ? "bg-yellow-400 text-gray-900"
                : "bg-gray-800 text-white"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button> */}
        {/* </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="tech-card rounded-lg overflow-hidden animate-slide-up h-64 relative group"
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundImage: `url(${category.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mr-4`}
                    >
                      <i
                        data-feather={category.icon}
                        className="w-6 h-6 text-white"
                      ></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>
                  <div className="card-content opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ul className="space-y-2">
                      {category.techs.map((tech, techIndex) => (
                        <li
                          key={techIndex}
                          className="flex items-center text-white"
                        >
                          <svg
                            className="h-5 w-5 mr-2 text-green-400"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// export default TechStackSection;

export default TechStackSection;
