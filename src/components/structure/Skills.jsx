import { useState} from "react";
import GenerateData from "../service/GenerateData";
export default function Skills() {
  // To stockage data of the accommodation
  const [data, setData] = useState(null);
  return (
    <>
    <GenerateData setData={setData}/>    
    <section className="skills">
      <article className="acquired">
      {data.map((item) => (

      ))}
      </article>
      <article className="InProcess">

      </article>
      <article className="OnTheProgram">

      </article>
    </section>
    </>
  );
}
