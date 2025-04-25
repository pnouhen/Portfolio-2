import Header from "../../components/Header/Header.jsx"
import About from "../../components/About/About.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import SoftSkills from "../../components/SoftSkills/SoftSkills.jsx";
import SlideShow from "../../components/SlideShow/SlideShow.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Footer from "../../components/Footer/Footer.jsx"

import "./home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <div className="container">
          <Skills />
          <SoftSkills />
          <SlideShow />
          <Projects />
      </div>
      <Footer />
    </>
  );
}
