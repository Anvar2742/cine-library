import { Swiper, SwiperSlide } from "swiper/react";
import * as Icon from "react-bootstrap-icons";

const PopularSlide = ({ items, onLoad }) => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="w-full overflow-visible pr-[15%] relative
            after:block after:absolute after:h-full after:w-[20%] after:pointer-events-none after:right-0 after:top-0 after:bg-overlay-horizontal after:z-30
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
                        alt={item.title ? item.title : item.name}
                        className="h-full w-full object-cover"
                        onLoad={onLoad}
                    />
                    <h2 className="text-2xl top-[10%] left-[8%] absolute z-10 pr-3 font-extrabold">
                        {item.title ? item.title : item.name}
                    </h2>
                    <div className="z-10 absolute bottom-[30px] px-[20px] w-full flex justify-between">
                        <button className="backdrop-blur-sm bg-gray-249 rounded-2xl font-extrabold text-lg flex justify-center items-center py-2 px-6 transition-colors hover:bg-gray-249-5">
                            <span className="pt-1">
                                {item.vote_average
                                    ? item.vote_average.toFixed(2)
                                    : "No votes"}
                            </span>
                        </button>
                        <button className="backdrop-blur-sm rounded-2xl font-extrabold text-lg flex justify-center items-center transition-colors py-2 px-6 text-black-darkest bg-secondary hover:bg-secondary-hover">
                            <span className="pt-1">
                                {item.release_date
                                    ? item.release_date
                                    : "Date misses."}
                            </span>
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
            <h2 className="text-3xl mb-8 font-extrabold">
                Popular{" "}
                {props.mainTab && props.mainTab === "tv"
                    ? "TV shows"
                    : "movies"}
            </h2>
            <PopularSlide items={props.data} onLoad={props.onLoad} />
        </div>
    );
};

export default Popular;
