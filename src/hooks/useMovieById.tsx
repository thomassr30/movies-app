import { useEffect, useState } from "react";
import apiConfig from "../api/apiConfig";
import axios from "axios";

export const useMovieById = (id: number) => {
  const [movieData, setmovieData] = useState<any>([] as never);
  const [actors, setactors] = useState<any>([] as never);

  useEffect(() => {
    fetchMovieById();
  }, []);

  const fetchMovieById = async () => {
    const resp = await axios.get<any>(`${apiConfig.baseUrl}movie/${id}`, {
      params: {
        api_key: apiConfig.apiKey,
        language: apiConfig.language,
      },
    });
    setmovieData(resp.data);

    const people = await axios.get<any>(
      `${apiConfig.baseUrl}movie/${id}/credits`,
      {
        params: {
          api_key: apiConfig.apiKey,
          language: apiConfig.language,
        },
      }
    );
    setactors(people.data.cast);
  };

  return {
    movieData,
    actors,
  };
};
