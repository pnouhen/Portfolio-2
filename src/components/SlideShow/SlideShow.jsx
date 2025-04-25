import { useState, useEffect } from "react";
import { fetchData } from "../../service/fetchData";

import "./slideShow.scss";

export default function SlideShow() {
  const [slideShowData, setSlideShowdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchData("/data/slideShow.json")
      .then((project) => setSlideShowdata(project))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading || !slideShowData) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <section id="SlideShow" className="SlideShow">
      <h2>Le carrousel des loisirs</h2>
      <div className="SlideShow__move">
        <h3>{slideShowData[currentIndex].title}</h3>
        <img
          src="/assets/Icon/chevron_left.svg"
          alt="Flèche gauche"
          className="chevronLeft"
          onClick={() =>
            setCurrentIndex(
              (index) =>
                (index - 1 + slideShowData.length) % slideShowData.length
            )
          }
          loading="lazy"
        />
        <img
          src={slideShowData[currentIndex].picture}
          alt={slideShowData[currentIndex].title}
          className="imgSlideShow"
        />
        <img
          src="/assets/Icon/chevron_right.svg"
          alt="Flèche droite"
          className="chevronRight"
          onClick={() =>
            setCurrentIndex((index) => (index + 1) % slideShowData.length)
          }
        />
        <p>{slideShowData[currentIndex].text}</p>
      </div>

      <ul className="dots">
        {slideShowData.map((item, index) => (
          <li
            key={index}
            className={`dot ${currentIndex === index ? "dot_selected" : ""}`}
          ></li>
        ))}
      </ul>
    </section>
  );
}
