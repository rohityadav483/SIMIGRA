import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Section from "./components/Section";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Home />
        <About />
        <Section />
        <Features />
        <Footer />
      </div>
    </>
  );
};

export default App;
