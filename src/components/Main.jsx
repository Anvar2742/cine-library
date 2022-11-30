import { after } from "underscore";
import { getTitles } from "../assets";
import { themoviedbApi } from "../redux/services/api";
import Error from "./Error";
import HomeSlider from "./HomeSlider";
import ImageLoader from "./ImageLoader";
import Loader from "./Loader";
import Popular from "./Popular";

const Main = (props) => {
    const trendingTitles = themoviedbApi.useGetTrendingWeekQuery(props.mainTab);
    const trendingTitlesData = getTitles(trendingTitles.data, 1280).slice(0, 6);

    const filterPopular = {
        kind: props.mainTab,
        language: "en-US",
    };
    const popularTitles = themoviedbApi.useGetPopularQuery(filterPopular);
    const popularTitlesData = getTitles(popularTitles.data, 1280).slice(0, 10);

    const onLoad = after(
        trendingTitlesData.concat(popularTitlesData).length,
        () => {
            props.updateMainLoading(false);
        }
    );

    if (trendingTitles.isLoading && popularTitles.isLoading) return <Loader />;
    if (trendingTitles.error && popularTitles.error) return <Error />;
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
                        mainTab={props.mainTab}
                        data={trendingTitlesData}
                        onLoad={onLoad}
                    />
                </div>
                <Popular
                    mainTab={props.mainTab}
                    data={popularTitlesData}
                    onLoad={onLoad}
                />
            </div>
        </main>
    );
};

export default Main;
