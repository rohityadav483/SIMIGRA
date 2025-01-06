import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Section from "./components/Section";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Home />
        <About />
        <Section />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default App;
