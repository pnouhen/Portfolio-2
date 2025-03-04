import { useState } from "react";
import GenerateData from "../service/GenerateData.jsx";
import "../../style/skills.scss";

export default function Skills() {
  // To stockage data
  const [data, setData] = useState(null);
  return (
    <>
      <GenerateData setData={setData} link="../../../public/skills.json" />
      {data ? (
        <section id="Compétences" className="skills">
          <h2 >Compétences</h2>
          <article className="acquired">
            <h3>Acquises</h3>
            <ul>
              {data.acquired.map((item, index) => (
                <li key={index}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className={item.class}
                  ></img>
                  {item.name}
                </li>
              ))}
            </ul>
          </article>
          <article className="InProcess">
            <h3>En cours d'acquisition</h3>
            <ul>
              {data.InProcess.map((item, index) => (
                <li key={index}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className={item.class}
                  ></img>
                  {item.name}
                </li>
              ))}
            </ul>
          </article>
          <article className="OnTheProgram">
            <h3>Au programme</h3>
            <ul>
              {data.OnTheProgram.map((item, index) => (
                <li key={index}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className={item.class}
                  ></img>
                  {item.name}
                </li>
              ))}
            </ul>
          </article>
        </section>
      ) : (
        <div>Chargement en cours...</div>
      )}
    </>
  );
}
