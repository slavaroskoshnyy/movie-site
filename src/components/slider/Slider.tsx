import React, { useEffect, useState } from "react";
import cn from "classnames";
interface IMovie {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  [key: string]: string | number;
}

interface ISlider {
  shift?: boolean;
  data: IMovie[];
  stails: any;
}

export default function Slider({ shift = false, data, stails }: ISlider) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movies, setMovies] = useState(data);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
    <div className={stails.section}>
      <div className={stails.sectionCenter}>
        {movies.map((movie: IMovie, movieIndex: number) => {
          const { id, title, url, description } = movie;

          let position = `${stails.nextSlider}`;
          if (movieIndex === currentIndex) {
            position = `${stails.activeSlider}`;
          }

          if (
            movieIndex === currentIndex - 1 ||
            (currentIndex === 0 && movieIndex === movies.length - 1)
          ) {
            position = `${stails.lastSlider}`;
          }
          return (
            <article className={cn(position, stails.article)} key={id}>
              <img className={stails.img} src={url} alt={title} />
              <div className={stails.wrapperContent}>
                <a href="/" target="_blank">
                  {title}
                </a>
                <p
                  style={!shift ? { display: "none" } : { display: "block" }}
                  // className={!shift ? stails.text : stails.none}
                >
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
          className={stails.iconsLeft}
          style={
            currentIndex === 0 && !shift
              ? { display: "none" }
              : { display: "block" }
          }
          onClick={() => setCurrentIndex((prevState) => prevState - 1)}
        ></div>
        <div
          className={stails.iconsRigh}
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
