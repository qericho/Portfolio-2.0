import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import LargeBtn from "../ui/Buttons/LargeBtn";
import { Link } from "react-scroll";
import BackToTop from "../ui/Buttons/BackToTop";

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen z-10 relative">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black/70 z-[-1]"></div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-center font-sans space-y-1 ,md:space-y-2">
          <h5 className="text-[15px] md:text-2xl lg:text-2xl font-[800] tracking-[2px] md:tracking-[4px] text-primary">
            Hello, World.
          </h5>
          <h1 className="w-[250px] md:w-full leading-[46px] md:leading-[90px] text-[46px] md:text-6xl lg:text-7xl xl:text-8xl font-semibold font-sans tracking-tight text-whte">
            I'm Echo Sta Maria.
          </h1>
          <p className="text-[16px] md:text-2xl leading-[24px] font-serif tracking-widest text-whte">
            Unemployed
          </p>
        </div>
        <div className="mt-5 md:mt-10 text-center">
          <Link to="about" smooth={true} duration={500} offset={-66}>
            <LargeBtn
              title={"More About Me"}
              style={
                "w-[228px] text-white border-[3px] border-border hover:border-primary"
              }
            />
          </Link>
        </div>
        <div
          className="flex items-center absolute bottom-15 space-x-10
         justify-center w-[300px] text-whte text-xl md:text-3xl "
        >
          <a
            href="https://github.com/qericho"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary cursor-pointer duration-300 ease-in-out"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jericho-sta-maria-119a92194/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary cursor-pointer duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/echstmr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary cursor-pointer duration-300 ease-in-out"
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
