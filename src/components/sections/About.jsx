import Title from "../ui/Title";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import LargeBtn from "../ui/Buttons/LargeBtn";
import { Link } from "react-scroll";
import Profile from "/me.jpg";

const h5 = "About";
const h1 = "Let me introduce myself.";
const p =
  "I am passionate about front-end development, with skills in HTML, CSS, JavaScript, ReactJS, and TailwindCSS. I enjoy creating responsive, user-friendly websites";

const skills = [
  { icon: SiJavascript, class: "text-yellow-400 hover:text-yellow-300" },
  { icon: SiHtml5, class: "text-orange-600 hover:text-orange-500" },
  { icon: SiCss3, class: "text-blue-600 hover:text-blue-500" },
  { icon: SiTailwindcss, class: "text-teal-400 hover:text-teal-300" },
  { icon: SiVite, class: "text-purple-500 hover:text-purple-400" },
  { icon: SiReact, class: "text-cyan-400 hover:text-cyan-300" },
  { icon: SiSupabase, class: "text-green-500 hover:text-green-400" },
  { icon: SiGit, class: "text-orange-500 hover:text-orange-400" },
  { icon: SiGithub, class: "text-gray-800 hover:text-gray-600" },
  { icon: VscVscode, class: "text-blue-700 hover:text-blue-500" },
];

const About = () => {
  return (
    <section id="about" className="bg-whte py-20">
      <Title
        image={Profile}
        h5={h5}
        h1={h1}
        h1Style={"text-dark"}
        p={p}
        pStyle={"text-center md:text-start md:w-[500px]"}
        divStyle={"md:mt-15"}
      />
      <div className="mx-auto w-full lg:w-200 py-5">
        {/* Profile */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between gap-y-10">
          <div className="w-full md:w-150 lg:w-90 md:px-0 px-2">
            <h3 className="text-[18px] md:text-start text-center text-dark tracking-wide font-bold">
              Profile
            </h3>
            <p className="text-[17px text-fade2 leading-[30px] pt-2">
              Committed to continuous learning and doing my best in every
              opportunity. I value personal growth, teamwork.
            </p>
            <div className="flex flex-col pt-10">
              <p className="uppercase tracking-widest font-semibold">
                FullName:
              </p>
              <p className="text-[17px text-fade2 leading-[30px]">
                Jericho L. Sta Maria
              </p>
            </div>
            <div className="flex flex-col pt-5">
              <p className="uppercase tracking-widest font-semibold">Email:</p>
              <p className="text-[17px text-fade2 leading-[30px]">
                echstmr@gmail.com
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="w-full md:w-150 lg:w-90 md:px-0 px-2">
            <div>
              <h3 className="text-[18px] md:text-start text-center text-dark tracking-widest font-bold">
                Skills
              </h3>
              <p className="text-[17px text-fade2 leading-[30px] pt-2">
                Continuously improving my skills and enjoying the process.
              </p>
            </div>

            <div className="p-2 grid grid-cols-4 place-items-start gap-4 pt-5">
              {skills.map(({ icon: Icon, class: iconClass }, idx) => (
                <Icon
                  key={idx}
                  className={`${iconClass} transition-colors duration-300`}
                  size={40}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex md:flex-row flex-col items-center justify-center gap-5 md:gap-10 mt-15 px-2">
          <Link
            className="w-full md:w-[228px]"
            to="contact"
            smooth={true}
            duration={500}
            offset={-66}
          >
            <LargeBtn
              title={"Hire Me"}
              style={
                "w-full md:w-[228px] text-blck hover:text-primary border-[3px] border-dark hover:border-primary"
              }
            />
          </Link>
          <LargeBtn
            title={"Download CV"}
            style={"w-full md:w-[228px] text-whte bg-dark hover:bg-black/90"}
            href="/echo-stamaria-CV.pdf"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
