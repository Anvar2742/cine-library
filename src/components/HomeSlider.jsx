import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTitles } from "../assets";
import * as Icon from "react-bootstrap-icons";
import Error from "./Error";
import { useEffect, useRef, useState } from "react";

const HomeSlider = (props) => {
    if (props.trendingMovies.length === 0) return <Error />;
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            className="w-full"
        >
            {props.trendingMovies.map((item) => (
                <SwiperSlide
                    key={item.id}
                    className={`
                        relative opacity-0 transition-opacity
                        after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black rounded-2xl overflow-hidden
                    `}
                >
                    <img
                        src={item.backdrop_path}
                        alt={
                            item.original_title
                                ? item.original_title
                                : item.name
                        }
                        className="h-full w-full object-cover"
                        onLoad={props.handleImageLoad}
                    />
                    <h2 className="text-6xl top-[10%] left-[8%] absolute z-10">
                        {item.original_title ? item.original_title : item.name}
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
