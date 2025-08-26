import ProjectCard from "../ui/Cards/ProjectCard";
import Title from "../ui/Title";
const h5 = "Portfolio";
const h1 = "Check Out Some of My Works.";
const p =
  "These recent projects showcase my practical experience, the skills I’ve been developing, and my continuous journey of learning and improvement in frontend development.";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-whte py-20">
      <Title
        h1={h1}
        h1Style={"text-dark text-center"}
        h5={h5}
        p={p}
        imgStyle={"hidden"}
        pStyle={"text-center"}
        divStyle={"md:mb-5"}
      />
      <div>{<ProjectCard />}</div>
    </section>
  );
};

export default Portfolio;
