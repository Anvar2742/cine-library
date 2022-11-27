import { useGetPopularQuery } from "../redux/services/api";
import Error from "./Error";
import HomeSlider from "./HomeSlider";
import Loader from "./Loader";
import Popular from "./Popular";

const Main = ({ mainTab }) => {
    const filter = {
        kind: mainTab,
        language: "en-US",
    };

    const { data, isLoading, error } = useGetPopularQuery(filter);

    if (isLoading) return <Loader />;
    if (error) return <Error />;

    return (
        <main className="text-white">
            <div className="pt-20 pb-12 grid auto-rows-auto grid-cols-1 gap-10">
                <div className="px-16">
                    <HomeSlider data={data}/>
                </div>
                <Popular data={data}/>
                <Popular data={data}/>
            </div>
        </main>
    );
};

export default Main;
