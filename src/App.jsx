import { useEffect, useState } from "react";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Loader from "./components/ui/Loader/Loader";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isVisible={loading} />
      {!loading && (
        <>
          <Nav />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
