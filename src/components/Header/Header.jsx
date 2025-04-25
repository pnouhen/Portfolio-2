import "./header.scss";

export default function Header() {
  return (
    <header>
      <img
        src="/assets/img/Photo-Profil.webp"
        alt="Photo de l'auteur de la page"
      />
      <div className="header___text">
        <h1>Pierre Nouhen</h1>
        <h2>Developpeur Web / Web mobile.</h2>
        <span>
          En formation avec le GRETA du Limousin et OpenClassrooms depuis le 09
          décembre 2024
        </span>
        <a
          href="/assets/CV/CV_Pierre_NOUHEN_Developpeur_Web.pdf"
        >
        Mon CV
        </a>
      </div>
    </header>
  );
}
