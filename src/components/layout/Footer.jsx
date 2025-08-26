import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-16 text-[var(--color-whte)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Location */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-4xl text-white">
              <FiMapPin />
            </span>
            <h5 className="text-[var(--color-primary)] font-semibold">
              Location
            </h5>
            <p className="text-[var(--color-fade2)]">Laguna, Philippines</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-4xl text-white">
              <FiMail />
            </span>
            <h5 className="text-[var(--color-primary)] font-semibold">Email</h5>
            <p className="text-[var(--color-fade2)]">echstmr@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center space-y-3">
            <span className="text-4xl text-white">
              <FiPhone />
            </span>
            <h5 className="text-[var(--color-primary)] font-semibold">Phone</h5>
            <p className="text-[var(--color-fade2)]">+639074015774</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--color-fade2)] mt-12 pt-8"></div>

        {/* Social Links */}
        <div className="flex justify-center mt-6 space-x-6 text-2xl">
          <a
            href="https://github.com/qericho"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jericho-sta-maria-119a92194/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/echstmr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer Bottom */}
        <p className="text-[var(--color-fade2)] text-center mt-6 text-sm">
          &copy; {new Date().getFullYear()} echstmr. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
