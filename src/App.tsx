import React, { useState, useEffect } from "react";
import { FaBeer, FaQuoteLeft } from "react-icons/fa";
import { AiFillCaretLeft } from "react-icons/ai";
import cl from "./components/slider/slider.module.scss";
import "./App.scss";
import data from "./data";
import Slider from "./components/slider/slider";

function App() {
  //   interface IMovie {
  //     albumId: number;
  //     id: number;
  //     title: string;
  //     url: string;
  //     thumbnailUrl: string;
  //     [key: string]: string | number;
  //   }

  //  export default IMovie;
  //   const [movies, setMovies] = useState(data);
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     const lastIndex = movies.length - 1;
  //     if (currentIndex < 0) {
  //       setCurrentIndex(lastIndex);
  //     }
  //     if (currentIndex > lastIndex) {
  //       setCurrentIndex(0);
  //     }
  //   }, [currentIndex, movies]);

  //   useEffect(() => {
  //     let slider = setInterval(
  //       () => setCurrentIndex((prevState) => prevState + 1),
  //       3000
  //     );
  //     return () => {
  //       clearInterval(slider);
  //     };
  //   }, [currentIndex]);

  return (
    //  <div className={cl.section}>
    //    <div className={cl.sectionCenter}>
    //      {movies.map((movie: IMovie, movieIndex: number) => {
    //        const { id, title, url, description } = movie;

    //        let position = `${cl.nextSlider}`;
    //        if (movieIndex === currentIndex) {
    //          position = `${cl.activeSlider}`;
    //        }

    //        if (
    //          movieIndex === currentIndex - 1 ||
    //          (currentIndex === 0 && movieIndex === movies.length - 1)
    //        ) {
    //          position = `${cl.lastSlider}`;
    //        }
    //        return (
    //          <article className={position} key={id}>
    //            <img src={url} alt={title} />
    //            <div className={cl.wrapperContent}>
    //              <h2>{title}</h2>
    //              <p>{description}</p>
    //              <button>
    //                <a href="/" target="_blank">
    //                  Смотреть
    //                </a>
    //              </button>
    //            </div>
    //          </article>
    //        );
    //      })}
    //      <div
    //        className={cl.iconsLeft}
    //        onClick={() => setCurrentIndex((prevState) => prevState - 1)}
    //      ></div>
    //      <div
    //        className={cl.iconsRigh}
    //        onClick={() => setCurrentIndex((prevState) => prevState + 1)}
    //      ></div>
    //    </div>
    //  </div>
    <Slider />
  );
}

export default App;
