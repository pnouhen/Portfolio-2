import Header from "../structure/Header.jsx";
import Title from "../structure/Title.jsx";
import About from "../structure/About.jsx";
import SoftSkills from "../structure/Soft-skills.jsx";
import Skills from "../structure/Skills.jsx";
import SlideShow from "../structure/SlideShow.jsx";
import Footer from "../structure/Footer.jsx";
import "../../style/general.scss";
import "../../style/home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <Title />
      <div className="container">
        <About />
      <SoftSkills />
      <Skills />
      </div>
      <SlideShow />
      <Footer />
    </>
  );
}
