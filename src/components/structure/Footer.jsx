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
              src="/assets/icon/linkedin-brands-solid.svg"
              alt="Logo Linkedin"
            />
            <p>Linkedin</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/pnouhen" target="_blank">
            <img
              src="/assets/icon/github-brands-solid.svg"
              alt="Logo GitHub"
            />
            <p>Github</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
