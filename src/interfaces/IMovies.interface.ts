import { IMovieData } from "./IMovieData.interface";

export interface IResponseData {
    page:          number;
    results:       Movie[];
    dates:         Dates;
    total_pages:   number;
    total_results: number;
}

export interface IMovieResponse {
    data:       IMovieData;
    status:     number;
    statusText: string;
    headers:    any;
    config:     any;
    request:    any;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Movie {
    poster_path:       string;
    adult:             boolean;
    overview:          string;
    release_date:      Date;
    genre_ids:         number[];
    id:                number;
    original_title:    string;
    original_language: any;
    title:             string;
    backdrop_path:     string;
    popularity:        number;
    vote_count:        number;
    video:             boolean;
    vote_average:      number;
}