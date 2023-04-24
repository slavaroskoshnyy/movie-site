/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState } from "react";
import cn from "classnames";
interface IMovie {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  [key: string]: string | number;
}
interface IStyles {
  [key: string]: string;
}

interface ISlider {
  shift?: boolean;
  data: IMovie[];
  styils: IStyles;
}

export default function Slider({ shift = false, data, styils }: ISlider) {
  const [movies, setMovies] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = movies.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, movies]);

  if (shift) {
    useEffect(() => {
      let slider = setInterval(
        () => setCurrentIndex((prevState) => prevState + 1),
        2000
      );
      return () => {
        clearInterval(slider);
      };
    }, [currentIndex]);
  }

  return (
    <div className={styils.section}>
      <div className={styils.sectionCenter}>
        {movies.map((movie: IMovie, movieIndex: number) => {
          const { id, title, url, description } = movie;

          let position = `${styils.nextSlider}`;
          if (movieIndex === currentIndex) {
            position = `${styils.activeSlider}`;
          }

          if (
            movieIndex === currentIndex - 1 ||
            (currentIndex === 0 && movieIndex === movies.length - 1)
          ) {
            position = `${styils.lastSlider}`;
          }
          return (
            <article className={cn(position, styils.article)} key={id}>
              <img className={styils.img} src={url} alt={title} />
              <div className={styils.wrapperContent}>
                <a href="/" target="_blank">
                  {title}
                </a>
                <p style={!shift ? { display: "none" } : { display: "block" }}>
                  {description}
                </p>
                <button
                  style={!shift ? { display: "none" } : { display: "block" }}
                >
                  <a href="/" target="_blank">
                    Смотреть
                  </a>
                </button>
              </div>
            </article>
          );
        })}
        <div
          className={styils.iconsLeft}
          style={
            currentIndex === 0 && !shift
              ? { display: "none" }
              : { display: "block" }
          }
          onClick={() => setCurrentIndex((prevState) => prevState - 1)}
        ></div>
        <div
          className={styils.iconsRigh}
          style={
            movies.length - 1 === currentIndex && !shift
              ? { display: "none" }
              : { display: "block" }
          }
          onClick={() => setCurrentIndex((prevState) => prevState + 1)}
        ></div>
      </div>
    </div>
  );
}
