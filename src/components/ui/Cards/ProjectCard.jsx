import { useState } from "react";

const projects = [
  {
    img: "/6.jpg",
    title: "CineTambay",
    desc: "Movie trailer app built with React and Tailwind.",
    demo: "https://cine-tambay.vercel.app/",
    source: "https://github.com/qericho/CineTambay",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    img: "/1.jpg",
    title: "Limuel Landscaping",
    desc: "Landing page for a landscaping business.",
    demo: "https://limuel-lanscaping.vercel.app/",
    source: "https://github.com/qericho/Limuel-Landscaping",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    img: "/2.jpg",
    title: "Simple CRUD with Supabase",
    desc: "Practice project demonstrating a CRUD app using Supabase.",
    demo: "https://spbase-crud.vercel.app/login",
    source: "https://github.com/qericho/spbase-crud",
    tech: ["React", "Tailwind", "Supabase", "Vite"],
  },
  {
    img: "/3.jpg",
    title: "Upskela UI Clone",
    desc: "Clone of the Upskela website UI.",
    demo: "https://upskwela-ui-clone.vercel.app/",
    source: "https://github.com/qericho/Upskwela-UI-Clone",
    tech: ["React", "Tailwind"],
  },
  {
    img: "/4.jpg",
    title: "Portfolio",
    desc: "Portfolio website design converted from Figma.",
    demo: "https://dezign-three.vercel.app/",
    source: "https://github.com/qericho/Dezign",
    tech: ["React", "Tailwind"],
  },
  {
    img: "/5.jpg",
    title: "Netflix UI Clone",
    desc: "Netflix user interface clone built with React and Tailwind.",
    demo: "https://my-react-app-cyan-seven.vercel.app/",
    source: "https://github.com/qericho/Nflix-Clone",
    tech: ["React", "Tailwind"],
  },
];

const ProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsExiting(false);
    }, 300);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Project Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative break-inside-avoid overflow-hidden shadow-md cursor-pointer mb-4 group"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay with Title & Description */}
            <div className="absolute inset-0 bg-black/80 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-white font-bold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-white text-sm">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Pop-up */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-start justify-center z-50 p-4 pt-20 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className={`bg-white w-full max-w-md relative transform transition-all duration-300 ${
              isExiting ? "animate-slideUp" : "animate-slideDown"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm mb-3">{selectedProject.desc}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="bg-gray-200 text-xs px-2 py-1 ">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/80 text-white text-sm px-3 py-1 transition "
                >
                  Demo
                </a>
                <a
                  href={selectedProject.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white text-sm px-3 py-1 transition "
                >
                  Source
                </a>
              </div>

              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-gray-800 w-7 h-7 flex items-center justify-center font-bold "
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100%);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
