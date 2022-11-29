import { Swiper, SwiperSlide } from "swiper/react";
import { getTitles } from "../assets";
import * as Icon from "react-bootstrap-icons";
import { useEffect, useState } from "react";

const PopularSlide = ({ items, handleImageLoad }) => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="w-full overflow-visible pr-[15%] relative
            after:block after:absolute after:h-full after:w-[20%] after:right-0 after:top-0 after:bg-overlay-horizontal after:z-30
        "
        >
            {items.map((item) => (
                <SwiperSlide
                    key={item.id}
                    className="
                relative
                after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black-2 rounded-2xl overflow-hidden"
                >
                    <img
                        src={item.poster_path}
                        alt={
                            item.original_title
                                ? item.original_title
                                : item.name
                        }
                        className="h-full w-full object-cover"
                        onLoad={handleImageLoad}
                    />
                    <h2 className="text-2xl top-[10%] left-[8%] absolute z-10 pr-3">
                        {item.original_title ? item.original_title : item.name}
                    </h2>
                    <div className="z-10 absolute bottom-[30px] px-[20px] w-full flex justify-between">
                        <button className="backdrop-blur-sm bg-gray-249 rounded-2xl font-extrabold text-lg flex justify-center items-center py-2 px-6 transition-colors hover:bg-gray-249-5">
                            <Icon.Plus size={38} />
                        </button>
                        <button className="backdrop-blur-sm rounded-2xl font-extrabold text-lg flex justify-center items-center transition-colors py-2 px-10 text-black-darkest bg-secondary hover:bg-secondary-hover">
                            Watch
                        </button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const Popular = (props) => {
    return (
        <div className="w-full pl-16">
            <h2 className="text-3xl mb-8">Popular</h2>
            <PopularSlide
                items={props.trendingMovies}
                handleImageLoad={props.handleImageLoad}
            />
        </div>
    );
};

export default Popular;
