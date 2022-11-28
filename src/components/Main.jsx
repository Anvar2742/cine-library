import { useEffect } from "react";
import { useGetPopularQuery } from "../redux/services/api";
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
    const { data, isLoading, error } = useGetPopularQuery(filter);

    if (isLoading) return <Loader />;
    if (error) return <Error />;
    return (
        <main className="relative">
            {props.isMainLoading.length === props.mainComponentCount ? (
                ""
            ) : (
                <ImageLoader />
            )}
            <div
                className={`text-white pt-20 pb-12 grid auto-rows-auto grid-cols-1 gap-10 ${
                    props.isMainLoading.length === props.mainComponentCount
                        ? ""
                        : "opacity-0"
                }`}
            >
                <div className="px-16">
                    <HomeSlider
                        data={data}
                        isMainLoading={props.isMainLoading}
                        updateMainLoading={props.updateMainLoading}
                    />
                </div>
                <Popular
                    data={data}
                    isMainLoading={props.isMainLoading}
                    updateMainLoading={props.updateMainLoading}
                />
                <Popular
                    data={data}
                    isMainLoading={props.isMainLoading}
                    updateMainLoading={props.updateMainLoading}
                />
            </div>
        </main>
    );
};

export default Main;
