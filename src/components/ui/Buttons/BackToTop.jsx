import { useState, useEffect } from "react";
import { TiArrowUp } from "react-icons/ti";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrollY > 300
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-0 right-0 bg-primary/80 hover:bg-blck text-white p-3  shadow-lg transition-transform transform cursor-pointer z-50"
          aria-label="Scroll to top"
        >
          <TiArrowUp className=" w-8 h-8" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
