import Title from "../ui/Title";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#151515] py-20">
      <Title
        h5={"Contact"}
        h1={"I'd Love To Hear From You."}
        h1Style={"text-whte"}
        imgStyle={"hidden"}
      />
      <div className="relative grid grid-cols-1 md:grid-cols-3 place-items-center md:gap-0 gap-y-15 py-10">
        <div className="w-full lg:w-70 border-white flex flex-col items-center justify-center space-y-4">
          <span className="text-4xl text-white">
            <FiMapPin />
          </span>
          <h5 className="text-primary">Where to find me</h5>
          <p className="text-fade">Laguna, Philippines</p>
        </div>
        <div className="w-full lg:w-70 border-white flex flex-col items-center justify-center space-y-4">
          <span className="text-4xl text-white">
            <FiMail />
          </span>
          <h5 className="text-primary">Email</h5>
          <p className="text-fade">echstmr@gmail.com</p>
        </div>
        <div className="w-full lg:w-70 border-white flex flex-col items-center justify-center space-y-4">
          <span className="text-4xl text-white">
            <FiPhone />
          </span>
          <h5 className="text-primary">Message me at</h5>
          <p className="text-fade">+639074015774</p>
        </div>

        <div className="absolute bottom-[-20px] md:right-42 flex items-center justify-between w-30 text-whte">
          <a
            href="https://github.com/qericho"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-primary duration-300 ease-in-out"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jericho-sta-maria-119a92194/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-primary duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/echstmr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-primary duration-300 ease-in-out"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
