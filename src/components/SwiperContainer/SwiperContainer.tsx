import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Movie } from "../../interfaces/IMovies.interface";
import apiConfig from "../../api/apiConfig";

import "swiper/css";
import "swiper/css/pagination";
import "./SwiperContainer.css";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: Movie[];
}

export const SwiperContainer = ({ movie }: Props) => {
  const navigate = useNavigate();
  const navigateMovie = (movie: Movie) => {
    navigate(`/movie/${movie.id}`, { state: movie });
  };

  const size = screen.width;
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]}>
        {movie.map((item, index) => {
          if (index < 3) {
            return (
              <SwiperSlide key={item.id}>
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(" +
                      apiConfig.imagePath +
                      item.backdrop_path +
                      ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "90vh",
                    backgroundSize: "cover",
                    maxWidth: "100%",
                  }}
                  onClick={() => (size < 500 ? navigateMovie(item) : null)}
                >
                  <div className="absolute lg:w-2/3 md:w-full sm:w-full h-56 bottom-16 left-10">
                    <h1 className="text-center lg:text-left text-gray-200 text-4xl font-extrabold px-5">
                      {item.title}
                    </h1>
                    <div className="invisible lg:visible flex ml-5 mt-2">
                      <h5 className="text-blue-600 font-semibold bg-yellow-400 px-3 rounded-xl">
                        {item.vote_average}
                      </h5>
                    </div>
                    <p className="text-gray-300 font-normal px-5 pt-1 h-20">
                      {item.overview.split(".")[0]}
                    </p>
                    <button
                      className="invisible lg:visible btn-swiper mx-5 mt-3"
                      onClick={(e) => navigateMovie(item)}
                    >
                      INFORMACIÓN
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
};
