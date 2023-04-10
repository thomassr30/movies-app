import axios from "axios";
import { useEffect, useState } from "react";
import { IResponseData, Movie } from "../interfaces/IMovies.interface";
import apiConfig from "../api/apiConfig";

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (page: number = 1) => {
    const resp = await axios.get<IResponseData>(
      `${apiConfig.baseUrl}movie/now_playing`,
      {
        params: {
          api_key: apiConfig.apiKey,
          language: apiConfig.language,
          page: page,
        },
      }
    );
    setNowPlaying((prev) => prev.concat(resp.data.results));
  };

  return {
    nowPlaying,
    fetchMovies,
  };
};
