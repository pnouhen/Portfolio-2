import { useEffect, useState } from "react";
import { fetchData } from "../../service/fetchData";

import "./projects.scss";

export default function Projects() {
  const [projectsData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("/data/projects.json")
      .then((project) => setProjectData(project))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading || !projectsData) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <section className="projects">
      <h2>Projets</h2>
      {projectsData.map((item, index) => (
        <article key={index}>
          <h3>{item.title}</h3>
          <img src={item.img} alt={`Photo de ${item.title}`}></img>
          <a href={item.link} target="_blank">
            Cliquez ici pour accéder au projet
          </a>
          <p>{item.description}</p>
        </article>
      ))}
    </section>
  );
}
