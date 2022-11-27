import topMovies from "./../assets/topMovies.json";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { getTitles } from "../assets";
import * as Icon from "react-bootstrap-icons";
import Error from "./Error";
import { useEffect, useRef, useState } from "react";

const HomeSlider = ({ data }) => {
    // ************************ TO DO
    // The code bellow is an attempt to fix the issue with sliders. 
    // const homeSliderRef = useRef(null);

    // const slideTo = (index) => homeSliderRef.current.swiper.slideTo(index);
    // slideTo(0);

    // The issue: on tab change in <Main /> the sliders dont update themselves. If the slider is on 2'nd slide, then on tab change it will be on 2'nd tab also.

    // What doesn't work in the code: we cannot render the SwiperSlide component and update HomeSlider component at the same time.

    // Probable fix: destroy and build again Swiper.

    const trendingMovies = getTitles(data, 1280).slice(0, 5);

    if (trendingMovies.length === 0) return <Error />;
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            className="w-full"
            // ref={homeSliderRef}
        >
            {trendingMovies.map((item) => (
                <SwiperSlide
                    key={item.id}
                    className={`
                        relative opacity-0 transition-opacity
                        after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black rounded-2xl overflow-hidden
                    `}
                >
                    <img
                        src={item.backdrop_path}
                        alt={item.original_title}
                        className="h-full w-full object-cover"
                    />
                    <h2 className="text-6xl top-[10%] left-[8%] absolute z-10">
                        {item.original_title}
                    </h2>
                    <div className="z-10 absolute bottom-[30px] px-[20px] w-full flex justify-between">
                        <button className="backdrop-blur-sm bg-gray-249 rounded-2xl font-extrabold text-lg flex justify-center items-center py-2 px-6 transition-colors hover:bg-gray-249-5">
                            <Icon.Plus size={38} />
                            Watchlist
                        </button>
                        <button className="backdrop-blur-sm rounded-2xl font-extrabold text-lg flex justify-center items-center transition-colors py-2 px-10 text-black-darkest bg-secondary hover:bg-secondary-hover">
                            Watch Now
                        </button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HomeSlider;
