import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Icon from "react-bootstrap-icons";
import Error from "./Error";
import { Link } from "react-router-dom";

const HomeSlider = (props) => {
    // console.log(props.data);
    if (props.data.length === 0) return <Error />;
    return (
        <>
            <h2 className="text-2xl sm:text-3xl mb-8 font-bold">
                Trending{" "}
                {props.mainTab && props.mainTab === "tv"
                    ? "TV shows"
                    : "movies"}
            </h2>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
                className="w-full h-[80vw] overflow-visible mb-16
                            md:h-[45vw]
                            lg:h-[30vw]"
            >
                {props.data.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className={`
                            relative opacity-0 transition-opacity
                        `}
                    >
                        <Link
                            className="text-white block h-full
                                        after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black rounded-2xl overflow-hidden"
                            to={`/title/${item.media_type}/${item.id}`}
                        >
                            <img
                                src={item.backdrop_path}
                                alt={item.title ? item.title : item.name}
                                className="h-full w-full object-cover"
                                onLoad={props.onLoad}
                            />
                            <h2 className="text-xl top-[10%] left-10 absolute z-10 font-bold pr-12 xl:text-6xl">
                                {item.title ? item.title : item.name}
                            </h2>
                            <div
                                className="z-10 absolute bottom-[30px] px-10 w-full flex justify-between items-center text-sm
                                            xl:text-xl"
                            >
                                <div className="backdrop-blur-sm bg-gray-249 rounded-2xl font-bold flex justify-center items-center h-8 px-4 transition-colors hover:bg-gray-249-5">
                                    <Icon.StarHalf className="mr-2 w-4 h-4 xl:w-5 xl:h-5" />
                                    <span className="">
                                        {item.vote_average
                                            ? item.vote_average.toFixed(2)
                                            : "No votes"}
                                    </span>
                                </div>
                                <div className="backdrop-blur-sm rounded-2xl font-bold flex justify-center items-center transition-colors h-8 px-4 text-black-darkest bg-secondary hover:bg-secondary-hover">
                                    <span className="">
                                        {item.release_date
                                            ? item.release_date
                                            : item.first_air_date
                                            ? item.first_air_date
                                            : "Date misses."}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default HomeSlider;
