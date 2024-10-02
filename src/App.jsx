import "./App.css";
import Footer from "./layout/Footer/Footer";
import Contact from "./views/Contact/Contact";
import Hero from "./views/Hero/Hero";
import Projects from "./views/Projects/Projects";
import Skills from "./views/Skills/Skills";


const App = () => {
  return (
    <>  
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
