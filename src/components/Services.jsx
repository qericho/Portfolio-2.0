import { FiMonitor, FiCode, FiLayout, FiZap } from "react-icons/fi";
import Title from "./ui/Title";

const services = [
  {
    icon: <FiMonitor size={28} />,
    title: "Responsive Web Design",
    description: "Creating websites that look great on any device.",
  },
  {
    icon: <FiCode size={28} />,
    title: "Frontend Development",
    description:
      "Building interactive and user-friendly interfaces using React and Tailwind.",
  },
  {
    icon: <FiLayout size={28} />,
    title: "UI/UX Design",
    description:
      "Designing intuitive layouts and experiences that engage users.",
  },
  {
    icon: <FiZap size={28} />,
    title: "Performance Optimization",
    description:
      "Improving website speed, accessibility, and SEO for better user experience.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-[var(--color-gry)]">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          h1="My Services"
          h5="What I Offer"
          p="I provide a range of services to help you build modern, responsive, and high-performance websites."
          h1Style="text-text-dark text-center"
          imgStyle="hidden"
          pStyle="text-center text-[var(--color-fade2)] py-2 md:py-3"
          divStyle="md:mb-10"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--color-whte)] p-8 shadow-sm
                         flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <div className="text-[var(--color-primary)] mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">
                {service.title}
              </h3>
              <p className="text-[var(--color-fade2)] text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
