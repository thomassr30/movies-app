import { useNavigate } from "react-router-dom";
import SwiperContainer from "../../components/SwiperContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import { useMovies } from "../../hooks/useMovies";
import "./Home.css";
import { Movie } from "../../interfaces/IMovies.interface";
import { Navbar } from "../../components/Navigation/Navbar";
import apiConfig from "../../api/apiConfig";
import DividerText from "../../components/DividerText";
import { useCallback, useEffect, useRef, useState } from "react";
import { useVisible } from "../../hooks/useVisible";
import Poster from "../../components/skeleton/poster";
import { usePopularMovie } from "../../hooks/usePopularMovie";

const Home = () => {
  const visorRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { visible } = useVisible({ visorRef });
  const [page, setpage] = useState(1);

  const changePage = useCallback(() => setpage((prev) => prev + 1), []);

  const { nowPlaying, fetchMovies } = useMovies();
  const { popularMovies } = usePopularMovie();

  const navigate = useNavigate();
  const navigateMovie = (movie: Movie) => {
    navigate(`/movie/${movie.id}`, { state: movie });
  };

  useEffect(() => {
    if (visible) {
      changePage();
    }
  }, [visible, changePage]);

  useEffect(() => {
    if (visible) {
      fetchMovies(page);
    }
  }, [page]);

  return (
    <>
      <Navbar />
      <SwiperContainer movie={nowPlaying} />

      <div className="mt-4 mx-10">
        <DividerText text="Películas de Estreno" />

        <div className="flex flex-row overflow-x-scroll scrollbar">
          {nowPlaying.map((item, index) => {
            return (
              <img
                key={index}
                src={apiConfig.urlPath + item.poster_path}
                className="w-60 cursor-pointer"
                onClick={() => navigateMovie(item)}
              />
            );
          })}
          <div className="w-12" ref={visorRef}>
            1
          </div>
        </div>
      </div>

      <section className="mt-4 mx-10">
        <DividerText text="Películas más Populares" />
        <div className="grid grid-cols-12 gap-4 justify-center">
          {popularMovies.map((item, idx) => {
            return (
              <div
                className="col-span-12 lg:col-span-3 mb-4 cursor-pointer"
                key={idx}
              >
                <img
                  src={apiConfig.imagePath + item.poster_path}
                  className="h-full rounded-lg"
                  alt=""
                  onClick={() => navigateMovie(item)}
                />
              </div>
            );
          })}
          <div className="w-12" ref={visorRef}></div>
        </div>
      </section>
    </>
  );
};

export default Home;
