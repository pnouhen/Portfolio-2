import Header from "../structure/Header.jsx";
import About from "../structure/About.jsx";
import Skills from "../structure/Skills.jsx";
import SoftSkills from "../structure/SoftSkills.jsx";
import SlideShow from "../structure/SlideShow.jsx";
import Projects from "../structure/Projects.jsx";
import Footer from "../structure/Footer.jsx"
import "../../style/home.scss";
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
