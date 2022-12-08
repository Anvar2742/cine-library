import Ava from "./../assets/img/ava.png";
import * as Icon from "react-bootstrap-icons";
import { ArrowMore, ArrowPoint } from "./Svgs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import genresData from "./../assets/genres.json";
import { getGenres, getTitles } from "../assets";
import { useEffect, useRef, useState } from "react";
import { themoviedbApi } from "../redux/services/api";
import { after } from "underscore";

const MiniSlider = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className={`${props.isSidebarLoading ? "opacity-0" : ""}`}>
            <div className="flex justify-between pr-9 mb-6">
                <h2 className="text-3xl font-extrabold">Top Rated</h2>
                <div className="flex">
                    <button ref={prevRef} className="-rotate-180 mr-5">
                        <ArrowPoint />
                    </button>
                    <button ref={nextRef}>
                        <ArrowPoint />
                    </button>
                </div>
                <button className="flex items-center">
                    <span className="pr-2 text-gray-200 text-sm">See More</span>{" "}
                    <ArrowPoint />
                </button>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                modules={[Navigation]}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="w-full overflow-visible pr-[25%] relative h-[20vh]
                                        after:block after:absolute after:h-full after:w-[20%] after:pointer-events-none after:right-0 after:top-0 after:bg-overlay-horizontal-dark-blue after:z-30
                                    "
            >
                {props.items.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className="
                        relative h-full
                        outline-1 outline-border-gray
                        after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black-2 rounded-2xl overflow-hidden"
                    >
                        <img
                            src={item.backdrop_path}
                            alt={item.title ? item.title : item.name}
                            className="h-full w-full object-cover"
                            onLoad={props.onLoad}
                        />
                        <h3 className="text-lg top-[10%] left-[8%] absolute z-10 font-extrabold">
                            {item.title ? item.title : item.name}
                        </h3>
                        <div className="z-10 absolute bottom-[5%] px-2 w-full flex justify-between">
                            <div className="backdrop-blur-sm bg-gray-249 rounded-2xl font-extrabold text-lg flex justify-center items-center py-1 px-4 transition-colors hover:bg-gray-249-5">
                                <span className="pt-1">
                                    {item.vote_average
                                        ? item.vote_average.toFixed(2)
                                        : "No votes"}
                                </span>
                            </div>
                            <div className="backdrop-blur-sm rounded-2xl font-extrabold text-lg flex justify-center items-center transition-colors py-1 px-8 text-black-darkest bg-secondary hover:bg-secondary-hover">
                                <span className="pt-1">
                                    {item.release_date
                                        ? item.release_date
                                        : "Date misses."}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const MiniSliderGenres = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className={`${props.isSidebarLoading ? "opacity-0" : ""}`}>
            <div className="flex justify-between pr-9 mb-6">
                <h2 className="text-3xl font-extrabold">Genres</h2>
                <div className="flex">
                    <button ref={prevRef} className="-rotate-180 mr-5">
                        <ArrowPoint />
                    </button>
                    <button ref={nextRef}>
                        <ArrowPoint />
                    </button>
                </div>
                <button className="flex items-center">
                    <span className="pr-2 text-gray-200 text-sm">See More</span>{" "}
                    <ArrowPoint />
                </button>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                modules={[Navigation]}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="w-full overflow-visible pr-[25%] relative
                                        after:block after:absolute after:h-full after:w-[20%] after:pointer-events-none after:right-0 after:top-0 after:bg-overlay-horizontal-dark-blue after:z-30
                                    "
            >
                {props.items.map((item, i) => {
                    if (i % 2) {
                        return (
                            <SwiperSlide key={item.id} className="">
                                <div
                                    className="h-[12vh] bg-[url('https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')] bg-center bg-cover bg-no-repeat relative h-full 
                                    outline-1 outline-border-gray
                                    flex items-center justify-center
                                    after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black-2 rounded-2xl overflow-hidden
                                    "
                                >
                                    <h3 className="relative z-10 text-lg font-extrabold">
                                        {item.name}
                                    </h3>
                                </div>

                                <div
                                    className="h-[12vh] bg-[url('https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')] bg-center bg-cover bg-no-repeat relative h-full 
                                    outline-1 outline-border-gray
                                    flex items-center justify-center
                                    after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black-2 rounded-2xl overflow-hidden
                                    mt-7
                                    "
                                >
                                    <h3 className="relative z-10 text-lg font-extrabold">
                                        {props.items[i - 1].name}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        );
                    }
                })}
            </Swiper>
        </div>
    );
};

const SidebarLoader = () => {
    return (
        <div className="absolute left-0 top-0 z-30 w-full h-[40vh] grid gap-8 grid-rows-preloader-rows">
            <div className="w-full flex">
                <div className="animate-pulse rounded-3xl bg-dark-blue w-full h-full mr-6"></div>
                <div className="animate-pulse rounded-3xl bg-dark-blue w-full h-full -mr-[80%]"></div>
            </div>
        </div>
    );
};

const SidebarRight = (props) => {
    const [isSidebarLoading, setIsSidebarLoading] = useState(true);
    const filterTopRated = {
        type: props.mainTab,
        language: "en-US",
        page: 1,
    };
    const topRatedTitles = themoviedbApi.useGetTopRatedQuery(filterTopRated);
    const topRatedTitlesData = getTitles(topRatedTitles.data, 500).slice(
        0,
        5
    );

    const genres = getGenres(genresData);

    const onLoad = after(topRatedTitlesData.length, () => {
        setIsSidebarLoading(false);
    });

    useEffect(() => {
        setIsSidebarLoading(true);
    }, [props.mainTab]);

    return (
        <aside className="bg-black-dark text-white-gray flex flex-col justify-around items-start pl-9 h-full overflow-x-hidden">
            <div className="flex items-center justify-between w-full pr-9">
                <button className="w-14 h-14 flex items-center justify-center bg-gray-249 rounded-2xl text-4xl relative">
                    <Icon.Bell />
                    <span className="block w-3 h-3 absolute top-[14px] right-[13px] bg-secondary rounded-full border-2 border-solid border-dark-blue"></span>
                </button>
                <button className="font-extrabold text-base flex items-center">
                    <span className="mr-2">Samantha</span>
                    <ArrowMore />
                </button>
                <img src={Ava} alt="" className="rounded-lg" />
            </div>

            <div className="w-full grid auto-rows-auto gap-16 grid-cols-1 relative">
                {isSidebarLoading ? <SidebarLoader /> : ""}
                <MiniSlider
                    items={topRatedTitlesData}
                    isSidebarLoading={isSidebarLoading}
                    onLoad={onLoad}
                />
                <MiniSliderGenres
                    items={genres}
                    isSidebarLoading={isSidebarLoading}
                />
            </div>
        </aside>
    );
};

export default SidebarRight;
