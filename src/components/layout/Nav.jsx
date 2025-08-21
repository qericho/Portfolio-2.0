import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = ["Home", "About", "Portfolio", "Contact"];

  // Close menu if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full px-0 md:px-30 lg:px-50 xl:px-60 z-50">
      <div className="w-[225px] h-[66px] bg-blck" ref={menuRef}>
        <div className="w-[80%] h-full px-10 flex items-center justify-between text-whte">
          {/* Hamburger / X */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer relative w-6 h-6 flex flex-col justify-center items-center group focus:outline-none"
          >
            <span
              className={`absolute h-[2px] w-full bg-primary rounded transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 bg-pink-500" : "-translate-y-[6px]"
              }`}
            ></span>

            <span
              className={`absolute h-[2px] w-full bg-primary rounded transition-all duration-200 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            <span
              className={`absolute h-[2px] w-full bg-primary rounded transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 bg-pink-500" : "translate-y-[6px]"
              }`}
            ></span>
          </button>

          <h1 className="text-xl font-sans font-bold">ECHO</h1>
        </div>

        {/* Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "h-70" : "h-0"
          }`}
        >
          <ul className="flex flex-col gap-y-5 px-10 pt-3 pb-10 font-sans font-semibold text-whte bg-blck">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-66}
                spy={true}
                activeClass="text-primary font-bold"
                onClick={() => setIsOpen(false)}
              >
                <li className="cursor-pointer transition-all duration-200 hover:translate-x-2 hover:text-pink-500">
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
