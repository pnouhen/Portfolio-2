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
          <h3>{data[currentIndex].title}</h3>
          <div className="SlideShow__move">
            <img
              src="/assets/Icon/arrow_left.svg"
              alt="Flèche gauche"
              className="arrow"
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
              src="/assets/Icon/arrow_right.svg"
              alt="Flèche droite"
              className="arrow"
              onClick={() =>
                setCurrentIndex((index) => (index + 1) % data.length)
              }
            />
          </div>
          <p>{data[currentIndex].text}</p>

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
