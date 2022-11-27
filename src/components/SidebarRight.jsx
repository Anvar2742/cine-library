import Ava from "./../assets/ava.png";
import * as Icon from "react-bootstrap-icons";
import { ArrowMore, ArrowPoint } from "./Svgs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import topMovies from "./../assets/topMovies.json";
import genresData from "./../assets/genres.json";
import { getGenres, getTitles } from "../assets";
import { useRef } from "react";

const MiniSlider = ({ items }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div>
            <div className="flex justify-between pr-9 mb-6">
                <h2 className="text-2xl">Top Rated</h2>
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
                className="w-full overflow-visible pr-[25%] relative min-h-[130px]
                                        after:block after:absolute after:h-full after:w-[20%] after:right-0 after:top-0 after:bg-overlay-horizontal-dark-blue after:z-30
                                    "
            >
                {items.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className="
                        relative h-full
                        outline-1 outline-border-gray
                        after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black-2 rounded-2xl overflow-hidden"
                    >
                        <img
                            src={item.backdrop_path}
                            alt={item.original_title}
                            className="h-full w-full object-cover"
                        />
                        <h3 className="text-base top-[10%] left-[8%] absolute z-10">
                            {item.original_title}
                        </h3>
                        <div className="z-10 absolute bottom-[5%] px-2 w-full flex justify-between">
                            <button className="backdrop-blur-sm bg-gray-249 rounded-2xl font-extrabold text-lg flex justify-center items-center py-1 px-4 transition-colors hover:bg-gray-249-5">
                                <Icon.Plus size={38} />
                            </button>
                            <button className="backdrop-blur-sm rounded-2xl font-extrabold text-lg flex justify-center items-center transition-colors py-1 px-8 text-black-darkest bg-secondary hover:bg-secondary-hover">
                                Watch
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const MiniSliderGenres = ({ items }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div>
            <div className="flex justify-between pr-9 mb-6">
                <h2 className="text-2xl">Top Rated</h2>
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
                className="w-full overflow-visible pr-[25%] relative min-h-[130px]
                                        after:block after:absolute after:h-full after:w-[20%] after:right-0 after:top-0 after:bg-overlay-horizontal-dark-blue after:z-30
                                    "
            > 
                {items.map((item, i) => {
                    if (i % 2) {
                        return (
                            <SwiperSlide
                                key={item.id}
                                className=""
                            >
                                <div className="h-48 bg-[url('https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')] bg-center bg-cover bg-no-repeat relative h-full 
                                    outline-1 outline-border-gray
                                    flex items-center justify-center
                                    after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black-2 rounded-2xl overflow-hidden
                                    ">
                                    <h3 className="relative z-10 text-lg">
                                        {item.name}
                                    </h3>
                                </div>

                                <div className="h-48 bg-[url('https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')] bg-center bg-cover bg-no-repeat relative h-full 
                                    outline-1 outline-border-gray
                                    flex items-center justify-center
                                    after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black-2 rounded-2xl overflow-hidden
                                    mt-7
                                    ">
                                    <h3 className="relative z-10 text-lg">
                                        {items[i - 1].name}
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

const SidebarRight = () => {
    const trendingMovies = getTitles(topMovies, 1280).slice(0, 5);
    const genres = getGenres(genresData);

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

            <div className="w-full grid auto-rows-auto gap-16 grid-cols-1">
                <MiniSlider items={trendingMovies} />
                <MiniSliderGenres items={genres} />
            </div>
        </aside>
    );
};

export default SidebarRight;
