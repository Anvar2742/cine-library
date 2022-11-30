import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_API_KEY;

export const themoviedbApi = createApi({
    reducerPath: "themoviedbApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3",
    }),
    endpoints: (builder) => ({
        getPopular: builder.query({ query: (filter) => `/${filter.kind}/popular?api_key=${API_KEY}&language=${filter.language}&page=1` }),
        getLatest: builder.query({ query: (filter) => `/${filter.kind}/latest?api_key=${API_KEY}&language=${filter.language}` }),
        getTopRated: builder.query({ query: (filter) => `/${filter.kind}/top_rated?api_key=${API_KEY}&language=${filter.language}&page=1` }),
        getTrendingWeek: builder.query({ query: (kind) => `/trending/${kind}/week?api_key=${API_KEY}` }),
        getSingleMovie: builder.query({query: (id) => `/movie/${id}`}),
        getMovieGenres: builder.query({query: (filter) => `/genre/movie/list?api_key=${API_KEY}&language=${filter.language}`}),
        getUpcomingMovies: builder.query({ query: (filter) => `/movie/upcoming?api_key=${API_KEY}&language=${filter.language}&page=${filter.page}` }),
    }),
});