const ImageLoader = () => {
    return (
        <div className="sm:px-16 px-4 mt-20 absolute left-0 top-0 z-30 w-full h-[70vh] grid gap-8 grid-rows-preloader-rows">
            <div className="w-full animate-pulse rounded-3xl bg-dark-blue"></div>
            <div className="w-full grid grid-rows-1 grid-cols-2 sm:grid-cols-3 gap-5">
                <div className="animate-pulse rounded-3xl bg-dark-blue"></div>
                <div className="animate-pulse rounded-3xl bg-dark-blue"></div>
                <div className="animate-pulse rounded-3xl bg-dark-blue"></div>
            </div>
        </div>
    );
};

export default ImageLoader;
