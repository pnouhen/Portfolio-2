import Header from "./components/structure/Header"
import Title from "./components/structure/Title"
import About from "./components/structure/About"
import SoftSkills from "./components/structure/Soft-skills"
import Skills from "./components/structure/skills"
import Footer from "./components/structure/Footer"
import "./style/general.scss"


function App() {

  return (
    <>
      <Header />
      <Title />
      <About />
      <SoftSkills />
      <Skills/>
      <Footer />
    </>
  )
}

export default App
