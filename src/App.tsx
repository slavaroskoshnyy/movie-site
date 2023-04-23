import React, { useState, useEffect } from "react";
import { FaBeer, FaQuoteLeft } from "react-icons/fa";
import { AiFillCaretLeft } from "react-icons/ai";
import bigSlider from "./components/slider/bigSlider.module.scss";
import smolSlider from "./components/slider/smolSlider.module.scss";
import "./App.scss";
import datas from "./data";
import Slider from "./components/slider/Slider";

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
    <div>
      <Slider shift={true} data={datas} stails={bigSlider} />;
      <Slider data={datas} stails={smolSlider} />;
    </div>
  );
}

export default App;
