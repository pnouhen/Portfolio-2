import "../../style/header.scss";
import CV from "../../assets/CV/CV général.pdf"

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#About">A propos</a>
          </li>
          <li>
            <a href="#SoftSkills">
              Savoirs être
              <br />
              Professionnels
            </a>
          </li>
          <li>
            <a href="#Compétences">Compétences</a>
          </li>
          <li>
            <a href="#SlideShow">
              Le carrousel
              <br />
              des loisirs
            </a>
          </li>
          <li>
            <a href="#Projects">
              Mes Projets
            </a>
          </li>
          <li>
            <a href={CV} target="_blank">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
