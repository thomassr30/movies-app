import { useEffect, useState } from "react";
import apiConfig from "../api/apiConfig";
import { IResponseData, Movie } from "../interfaces/IMovies.interface";
import axios from "axios";

export const usePopularMovie = () => {
  const [popularMovies, setpopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async (page: number = 1) => {
    const resp = await axios.get<IResponseData>(
      `${apiConfig.baseUrl}movie/popular`,
      {
        params: {
          api_key: apiConfig.apiKey,
          language: apiConfig.language,
          page: page,
        },
      }
    );
    setpopularMovies((prev) => prev.concat(resp.data.results));
  };

  return {
    popularMovies,
    fetchPopularMovies,
  };
};
