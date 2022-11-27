import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "29f3aaf4f5e98c4d1he3ece2812871bt";

export const themoviedbApi = createApi({
    reducerPath: "themoviedbApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3"
    }),
    endpoints: (builder) => ({
        getPopular: builder.query({ query: (filter) => `/${filter.kind}/popular?api_key=${API_KEY}&language=${filter.language}&page=1` }),
        getSingleMovie: builder.query({query: (id) => `/movie/${id}`}),
        getMovieGenres: builder.query({query: (filter) => `/genre/movie/list?api_key=${API_KEY}&language=${filter.language}`}),
    }),
});

export const { useGetPopularQuery, useGetSingleMovieQuery, useGetMovieGenresQuery } = themoviedbApi;

