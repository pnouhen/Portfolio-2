import { useState, useEffect } from "react";
import { fetchData } from "../../service/fetchData";

import "./skills.scss";

export default function Skills() {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("/data/skills.json")
      .then((data) => setSkillsData(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading || !skillsData) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <section id="Compétences" className="skills">
      <h2>Compétences</h2>

      <article className="acquired">
        <h3>Acquises :</h3>
        <ul>
          {skillsData.acquired.map((item, index) => (
            <li key={index}>
              <img
                src={item.logo}
                alt={`Logo de ${item.name}`}
                className={item.class}
                loading="lazy"
              />
              {item.name}
            </li>
          ))}
        </ul>
      </article>

      <article className="InProcess">
        <h3>En cours d'acquisition :</h3>
        <ul>
          {skillsData.InProcess.map((item, index) => (
            <li key={index}>
              <img
                src={item.logo}
                alt={`Logo de ${item.name}`}
                className={item.class}
                loading="lazy"
              />
              {item.name}
            </li>
          ))}
        </ul>
      </article>

      <article className="OnTheProgram">
        <h3>Au programme :</h3>
        <ul>
          {skillsData.OnTheProgram.map((item, index) => (
            <li key={index}>
              <img
                src={item.logo}
                alt={`Logo de ${item.name}`}
                className={item.class}
                loading="lazy"
              />
              {item.name}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
