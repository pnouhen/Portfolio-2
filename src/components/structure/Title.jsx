import "../../style/title.scss";

export default function Title() {
  return (
    <div className="title">
      <img
        src="/assets/img/Photo-Profil.jpg"
        alt="Photo de l'auteur de la page"
      />
      <div className="title_text">
        <h1>Pierre Nouhen</h1>
        <p>
          Mon objectif
          <br />
          Devenir Developpeur Web / Web mobile.
        </p>
        <span>
          En formation avec le GRETA du Limousin et OpenClassrooms depuis le 09
          décembre 2024
        </span>
      </div>
    </div>
  );
}
