import { useState } from "react";
import GenerateData from "../service/GenerateData.jsx";
import "../../style/slideShow.scss";

export default function SlideShow() {
  // Pour stocker les données
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <GenerateData setData={setData} link="/data/slideShow.json" />
      {data ? (
        <section id="SlideShow" className="SlideShow">
          <h2>Le carrousel des loisirs</h2>
          <div className="SlideShow__move">
          <h3>{data[currentIndex].title}</h3>
            <img
              src="/assets/Icon/chevron_left.svg"
              alt="Flèche gauche"
              className="chevronLeft"
              onClick={() =>
                setCurrentIndex(
                  (index) => (index - 1 + data.length) % data.length
                )
              }
            />
            <img
              src={data[currentIndex].picture}
              alt={data[currentIndex].title}
              className="imgSlideShow"
            />
            <img
              src="/assets/Icon/chevron_right.svg"
              alt="Flèche droite"
              className="chevronRight"
              onClick={() =>
                setCurrentIndex((index) => (index + 1) % data.length)
              }
            />
          <p>{data[currentIndex].text}</p>
          </div>

          <ul className="dots">
            {data.map((item, index) => (
              <li
                key={index}
                className={`dot ${
                  currentIndex === index ? "dot_selected" : ""
                }`}
              ></li>
            ))}
          </ul>
        </section>
      ) : (
        <div>Chargement en cours...</div>
      )}
    </>
  );
}
