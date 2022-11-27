import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { themoviedbApi } from "./services/api";

export const store = configureStore({
    reducer: {
        [themoviedbApi.reducerPath]: themoviedbApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(themoviedbApi.middleware),
});
