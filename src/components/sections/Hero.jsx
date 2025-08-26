import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import LargeBtn from "../ui/Buttons/LargeBtn";
import { Link } from "react-scroll";
import BackToTop from "../ui/Buttons/BackToTop";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen relative flex flex-col justify-center items-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 md:px-0 flex flex-col items-center space-y-4 md:space-y-6">
        {/* Intro */}
        <span className="text-sm md:text-lg font-bold tracking-widest text-[var(--color-primary)] uppercase">
          Hello, World.
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-whte)] leading-tight">
          I'm Echo Sta Maria
        </h1>

        {/* Subtitle with Typewriter */}
        <p className="text-sm md:text-lg text-white font-serif">
          <Typewriter
            words={[
              "Unemployed",
              "Aspiring Frontend Developer",
              "Looking for Opportunities",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </p>

        {/* CTA Button */}
        <div className="mt-4 md:mt-6">
          <Link to="about" smooth={true} duration={500} offset={-66}>
            <LargeBtn
              title="More About Me"
              style="w-55 text-[var(--color-whte)] border-3 border-[var(--color-border)] hover:border-[var(--color-primary)] transition transform duration-300"
            />
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-6 mt-6 text-xl md:text-2xl text-[var(--color-whte)]">
          <a
            href="https://github.com/qericho"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition transform hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jericho-sta-maria-119a92194/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition transform hover:scale-110 duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/echstmr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition transform hover:scale-110 duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <BackToTop />
    </section>
  );
};

export default Hero;
