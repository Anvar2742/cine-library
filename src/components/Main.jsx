import { useEffect } from "react";
import { getTitles } from "../assets";
import { themoviedbApi } from "../redux/services/api";
import Error from "./Error";
import HomeSlider from "./HomeSlider";
import Loader from "./Loader";
import Popular from "./Popular";

const ImageLoader = () => {
    return (
        <div className="px-16 mt-20 absolute left-0 top-0 z-30 w-full h-[70vh] grid gap-8 grid-rows-preloader-rows">
            <div className="w-full animate-pulse rounded-3xl bg-dark-blue"></div>
            <div className="w-full grid grid-rows-1 grid-cols-3 gap-5">
                <div className="animate-pulse rounded-3xl bg-dark-blue"></div>
                <div className="animate-pulse rounded-3xl bg-dark-blue"></div>
                <div className="animate-pulse rounded-3xl bg-dark-blue"></div>
            </div>
        </div>
    );
};

const Main = (props) => {
    const filter = {
        kind: props.mainTab,
        language: "en-US",
    };
    const { data, isLoading, error } = themoviedbApi.useGetPopularQuery(filter);

    const trendingMovies = getTitles(data, 1280).slice(0, 5);

    /* Await images functionality */
    // TO-DO
    /**
     * Error handling
     */
    function handleImageLoad() {
        props.updateImagesCount();
    }

    useEffect(() => {
        if (!isLoading) {
            if (
                trendingMovies.length * props.mainComponentCount ===
                props.imagesCount
            ) {
                props.updateMainLoading(false);
            }
        }
    }, [props.imagesCount]);

    useEffect(() => {
        if (props.isMainLoading) props.updateImagesCount(-1);
    }, [props.isMainLoading]);
    /* Await images functionality */

    // TO-DO
    /**
     * Swiper stays on current index on tab change - BUG
     * mainComponentCount - automaticly detect how many images do we have
     */

    if (isLoading) return <Loader />;
    if (error) return <Error />;
    return (
        <main className="relative">
            {props.isMainLoading ? <ImageLoader /> : ""}
            <div
                className={`text-white pt-20 pb-12 grid auto-rows-auto grid-cols-1 gap-10 ${
                    props.isMainLoading ? "opacity-0" : ""
                }`}
            >
                <div className="px-16">
                    <HomeSlider
                        handleImageLoad={handleImageLoad}
                        trendingMovies={trendingMovies}
                    />
                </div>
                <Popular
                    handleImageLoad={handleImageLoad}
                    trendingMovies={trendingMovies}
                />
                <Popular
                    handleImageLoad={handleImageLoad}
                    trendingMovies={trendingMovies}
                />
            </div>
        </main>
    );
};

export default Main;
