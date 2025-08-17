const ProjectCard = () => {
  const projects = [
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
      tech: ["React"],
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

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Masonry container */}
      <div className="columns-1 md:columns-2 lg:columns-2 gap-0">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative group break-inside-avoid overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm mb-3">{project.desc}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-white/20 text-xs px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/80 text-white text-sm px-3 py-1 transition"
                >
                  Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white text-sm px-3 py-1 transition"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
