import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
