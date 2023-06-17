import { Swiper, SwiperSlide } from "swiper/react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const PopularSlider = (props) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
                1536: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 3,
                },
                640: {
                    slidesPerView: 2,
                },
            }}
            className="w-full h-[100vw] overflow-visible pr-[15%] relative
                        after:block after:absolute after:h-full after:w-[20%] after:right-0 after:top-0 after:bg-overlay-horizontal after:z-30 after:pointer-events-none
                        2xl:h-[35vw]
                        lg:h-[25vw]
                        md:h-[35vw]
                        sm:h-[55vw]
                    "
        >
            {props.items.map((item) => (
                <SwiperSlide key={item.id} className="">
                    <Link
                        to={`/title/${props.mainTab}/${item.id}`}
                        className="block relative h-full
                                    after:block after:absolute after:w-full after:h-full after:top-0 after:bg-overlay-black-2 rounded-2xl overflow-hidden"
                    >
                        <img
                            src={item.poster_path}
                            alt={item.title ? item.title : item.name}
                            className="h-full w-full object-cover"
                            onLoad={props.onLoad}
                        />
                        <h2
                            className="text-xl top-[10%] left-[8%] absolute z-10 pr-3 xl:text-2xl"
                        >
                            {item.title ? item.title : item.name}
                        </h2>
                        <div
                            className="z-10 absolute bottom-[30px] px-[20px] w-full flex justify-between gap-2 text-sm
                                        2xl:text-lg"
                        >
                            <div className="backdrop-blur-sm bg-gray-249 rounded-2xl font-bold flex justify-center items-center py-2 px-3 transition-colors hover:bg-gray-249-5">
                                <span className="">
                                    {item.vote_average
                                        ? item.vote_average.toFixed(2)
                                        : "No votes"}
                                </span>
                            </div>
                            <div className="backdrop-blur-sm rounded-2xl font-bold flex justify-center items-center transition-colors py-2 px-3 text-black-darkest bg-secondary hover:bg-secondary-hover">
                                <span className="">
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
    );
};

const Popular = (props) => {
    console.log(props.data);
    return (
        <div className="w-full pl-4 sm:pl-16">
            <h2 className="text-2xl sm:text-3xl mb-8 font-bold">
                Popular{" "}
                {props.mainTab && props.mainTab === "tv"
                    ? "TV shows"
                    : "movies"}
            </h2>
            <PopularSlider
                items={props.data}
                onLoad={props.onLoad}
                mainTab={props.mainTab}
            />
        </div>
    );
};

export default Popular;
