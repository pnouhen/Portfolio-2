import Header from "../structure/Header";
import Title from "../structure/Title";
import About from "../structure/About";
import SoftSkills from "../structure/Soft-skills";
import Skills from "../structure/skills";
import SlideShow from "../structure/SlideShow";
import Footer from "../structure/Footer";
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
