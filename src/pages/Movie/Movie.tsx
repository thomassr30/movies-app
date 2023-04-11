import { useLocation, useParams, useNavigate } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import Navbar from "../../components/Navigation";
import { useMovieById } from "../../hooks/useMovieById";
import dayjs from "dayjs";
import { FaArrowLeft } from "react-icons/fa";
import DividerText from "../../components/DividerText";

import "./Movie.css";

export const Movie = () => {
  let url = apiConfig.urlPath;
  const {
    state: { backdrop_path },
  } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { movieData, actors } = useMovieById(Number(id));
  url = url + backdrop_path;
  const size = screen.width;

  return (
    <>
      {size > 500 && <Navbar />}

      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
            url +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
          backgroundSize: "cover",
          maxWidth: "100%",
        }}
        className="overflow-y-scroll"
      >
        <div className="mt-5 lg:mt-32 flex flex-col lg:flex-row w-11/12">
          <div
            className="visible lg:invisible bg-white w-12 h-12 relative top-5 left-5 rounded-full flex justify-center items-center"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </div>
          <div className="flex justify-center w-full lg:w-1/3 mt-10">
            <img
              src={apiConfig.imagePath + movieData.poster_path}
              alt={movieData.title}
              className="w-2/3 rounded-xl"
            />
          </div>
          <div className="w-full ml-5 lg:ml-0 flex-1 lg:w-2/3 bg-black bg-opacity-30 rounded-xl">
            <h1 className="mx-2 text-3xl text-gray-100 font-bold text-center lg:text-left mt-5 lg:mt-20">
              {movieData.title}
            </h1>
            <h3 className="mx-2 text-gray-100 font-semibold text-center lg:text-left">
              {movieData.tagline}
            </h3>
            <p className="mx-3 mt-1 lg:mt-5 text-gray-100 font-normal text-center lg:text-left">
              {movieData.overview}
            </p>
            <div className="mt-5">
              <div className="mx-3 my-2 flex">
                <h4 className="text-gray-100 font-semibold">Idioma:</h4>
                <p className="mx-1 text-center text-gray-100 font-extralight">
                  {movieData.original_language}
                </p>
              </div>
              <div className="mx-3 my-2 flex">
                <h4 className="text-gray-100 font-semibold">Duración:</h4>
                <p className="mx-1 text-center text-gray-100 font-extralight">
                  {movieData.runtime} min.
                </p>
              </div>
              <div className="mx-3 my-2 flex">
                <h4 className="text-gray-100 font-semibold">Fecha Estreno:</h4>
                <p className="mx-1 text-center text-gray-100 font-extralight">
                  {dayjs(movieData.release_date).format("DD/MM/YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <DividerText text="Actores" />
          <div className="flex flex-row overflow-x-scroll scrollbar mt-5">
            {actors.map((item: any, index: number) => {
              if (item.profile_path != null) {
                return (
                  <img
                    key={index}
                    src={apiConfig.urlPath + item.profile_path}
                    className="w-32 cursor-pointer"
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
