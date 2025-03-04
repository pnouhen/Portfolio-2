import { useState } from "react"
import GenerateData from "../service/GenerateData"
import "../../style/projects.scss"

export default function Projects(){
    const [data, setData] = useState(null);
    return(
        <>
         <GenerateData setData={setData} link="/data/projects.json" />
        {data ?(
            <section className="projects">
                <h2 id="Projects">Projets</h2>
                {data.map((item, index) =>(
                <article key={index}>
                    <h3>{item.title}</h3>
                    <img src={item.img} alt={`Photo de ${item.title}`}></img>
                    <a href={item.link} target="_blank">Cliquez ici pour accéder au projet</a>
                    <p>{item.description}</p>
                </article>
                ))}
            </section>
        ) : (
            <div>Chargement...</div>
        )

        }
        </>
    )
}