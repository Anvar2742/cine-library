import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleTitle } from "../assets";
import { themoviedbApi } from "../redux/services/api";
import Loader from "./Loader";
import * as Icon from "react-bootstrap-icons";

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

const SingleSidebarRight = (props) => {
    const { type, titleId } = useParams();
    const [filter, setFilter] = useState({
        type,
        id: titleId,
        language: "en-US",
    });
    const [isImageLoading, setIsimageLoading] = useState(true);

    const { data, isLoading, error } =
        themoviedbApi.useGetSingleMovieQuery(filter);

    const singleItem = getSingleTitle(data, 1280);

    if (isLoading) return <Loader />;
    if (error) return <Error />;

    return (
        <aside className="bg-black-dark text-white-gray flex flex-col justify-around items-start pl-6 h-full overflow-x-hidden">
            <h2 className="text-2xl mt-5 bg-secondary text-center p-2 font-extrabold rounded-l-2xl">
                {singleItem.tagline ? singleItem.tagline : "no tagline"}
            </h2>
            <div>
                <h3 className="text-2xl mb-2 font-extrabold">Genres</h3>
                <div>
                    {singleItem.genres?.map((genre) => (
                        <Link
                            key={genre.id}
                            to={`/${genre.id}`}
                            className="border border-white rounded-2xl p-1 px-3 pt-2 mb-2 flex items-center justify-center text-lg transition-colors hover:bg-white hover:text-black-darkest"
                        >
                            {genre.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl mb-2 font-extrabold">Rating</h3>
                <div className="backdrop-blur-sm bg-gray-249 rounded-2xl font-extrabold text-2xl flex justify-center items-center h-14 px-8 transition-colors hover:bg-gray-249-5">
                    <Icon.StarHalf size={35} className="mr-2" />
                    <span className="pt-1">
                        {singleItem.vote_average
                            ? singleItem.vote_average.toFixed(2)
                            : "No votes"}
                    </span>
                </div>
            </div>
            <div>
                <h3 className="text-2xl mb-2 font-extrabold">Release date</h3>
                <div className="mb-2 text-lg">
                    {singleItem.release_date
                        ? singleItem.release_date
                        : "No date"}
                </div>
            </div>
            <div>
                <h3 className="text-2xl mb-2 font-extrabold">Runtime</h3>
                <div className="mb-2 text-lg">
                    {singleItem.runtime
                        ? singleItem.runtime + " min"
                        : "No runtime"}
                </div>
            </div>
            <div>
                <h3 className="text-2xl mb-2 font-extrabold">Homepage</h3>
                <a
                    href={
                        singleItem.homepage
                            ? singleItem.homepage + " min"
                            : "No runtime"
                    }
                    className="mb-2 text-lg capitalize"
                >
                    {
                        new URL(singleItem.homepage).hostname
                            .split(".")
                            .slice(-2, -1)[0]
                    }
                </a>
            </div>
        </aside>
    );
};

export default SingleSidebarRight;
