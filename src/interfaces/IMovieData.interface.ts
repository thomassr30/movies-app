export interface IMovieData {
    data:       Data;
    status:     number;
    statusText: string;
    headers:    IMovieDataHeaders;
    config:     Config;
    request:    Request;
}

export interface Config {
    transitional:      Transitional;
    adapter:           string[];
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    env:               Request;
    headers:           ConfigHeaders;
    params:            Params;
    method:            string;
    url:               string;
}

export interface Request {
}

export interface ConfigHeaders {
    Accept: string;
}

export interface Params {
    api_key:  string;
    language: string;
}

export interface Transitional {
    silentJSONParsing:   boolean;
    forcedJSONParsing:   boolean;
    clarifyTimeoutError: boolean;
}

export interface Data {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: BelongsToCollection;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface BelongsToCollection {
    id:            number;
    name:          string;
    poster_path:   string;
    backdrop_path: string;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}

export interface IMovieDataHeaders {
    "access-control-allow-origin":   string;
    "access-control-expose-headers": string;
    "alt-svc":                       string;
    "cache-control":                 string;
    "content-encoding":              string;
    "content-type":                  string;
    date:                            string;
    etag:                            string;
    server:                          string;
    vary:                            string;
    via:                             string;
    "x-amz-cf-id":                   string;
    "x-amz-cf-pop":                  string;
    "x-cache":                       string;
    "x-memc":                        string;
    "x-memc-age":                    string;
    "x-memc-expires":                string;
    "x-memc-key":                    string;
}
