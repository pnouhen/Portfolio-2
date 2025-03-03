import "../../style/header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#Apropos">A propos</a>
          </li>
          <li>
            <a href="#SEP">
              Savoirs être
              <br />
              Professionnels
            </a>
          </li>
          <li>
            <a href="#Compétences">Compétences</a>
          </li>
          <li>
            <a href="#Carrousel">
              Le carrousel
              <br />
              des loisirs
            </a>
          </li>
          <li>
            <a href="./assets/CV/CV général.pdf" target="_blank">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
