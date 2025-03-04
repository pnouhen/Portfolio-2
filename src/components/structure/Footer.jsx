import Linkedin from "/assets/Icon/linkedin-brands-solid.svg"
import GitHub from  "/assets/Icon/github-brands-solid.svg"
import "../../style/footer.scss";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/pierre-nouhen-594684204/"
            target="_blank"
          >
            <img
              src={Linkedin}
              alt="Logo Linkedin"
            />
            <p>Linkedin</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/pnouhen" target="_blank">
            <img
              src={GitHub}
              alt="Logo GitHub"
            />
            <p>Github</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
