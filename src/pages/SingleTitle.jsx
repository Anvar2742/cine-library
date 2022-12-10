import { useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTitle } from "../assets";
import ImageLoader from "../components/ImageLoader";
import Loader from "../components/Loader";
import { themoviedbApi } from "../redux/services/api";

const SingleTitle = (props) => {
    const { type, titleId } = useParams();
    const [filter, setFilter] = useState({
        type,
        id: titleId,
        language: "en-US",
    });
    const [isImageLoading, setIsimageLoading] = useState(true);

    const { data, isLoading, error } =
        themoviedbApi.useGetSingleMovieQuery(filter);

    !isLoading && console.log(getSingleTitle(data, 1280));
    const singleItem = getSingleTitle(data, 1280);

    if (isLoading) return <Loader />;
    if (error) return <Error />;
    return (
        <div className="text-white relative px-16 mt-20 pb-16">
            {isImageLoading ? <ImageLoader /> : ""}
            <div className={`${isImageLoading ? "opacity-0" : ""}`}>
                <img
                    src={singleItem.backdrop_path}
                    alt={singleItem.title ? singleItem.title : "no title"}
                    title={singleItem.title ? singleItem.title : "no title"}
                    onLoad={() => setIsimageLoading(false)}
                    className="roun rounded-2xl"
                />
                <h1 className="text-6xl font-bold mt-10">
                    {singleItem.title ? singleItem.title : "no title"}
                </h1>
                <p className="text-2xl mt-5">
                    {singleItem.overview
                        ? singleItem.overview
                        : "no description"}
                </p>
            </div>
        </div>
    );
};

export default SingleTitle;
