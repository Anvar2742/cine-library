import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Icon from "react-bootstrap-icons";
import Error from "./Error";
import { Link } from "react-router-dom";

const HomeSlider = (props) => {
    console.log(props.data);
    if (props.data.length === 0) return <Error />;
    return (
        <>
            <h2 className="text-3xl mb-7 font-extrabold">
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
                className="w-full h-[30vw]"
            >
                {props.data.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className={`
                        relative opacity-0 transition-opacity
                    `}
                    >
                        <Link
                            className="text-white block
                        after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black rounded-2xl overflow-hidden
                        "
                            to={`/title/${item.media_type}/${item.id}`}
                        >
                            <img
                                src={item.backdrop_path}
                                alt={item.title ? item.title : item.name}
                                className="h-full w-full object-cover"
                                onLoad={props.onLoad}
                            />
                            <h2 className="text-6xl top-[10%] left-[8%] absolute z-10 font-extrabold">
                                {item.title ? item.title : item.name}
                            </h2>
                            <div className="z-10 absolute bottom-[30px] px-5 w-full flex justify-between items-center">
                                <div className="backdrop-blur-sm bg-gray-249 rounded-2xl font-extrabold text-2xl flex justify-center items-center h-14 px-8 transition-colors hover:bg-gray-249-5">
                                    <Icon.StarHalf size={35} className="mr-2" />
                                    <span className="pt-1">
                                        {item.vote_average
                                            ? item.vote_average.toFixed(2)
                                            : "No votes"}
                                    </span>
                                </div>
                                <div className="backdrop-blur-sm rounded-2xl font-extrabold text-lg flex justify-center items-center transition-colors h-14 px-8 text-black-darkest bg-secondary hover:bg-secondary-hover">
                                    <span className="pt-1">
                                        {item.release_date
                                            ? item.release_date
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
