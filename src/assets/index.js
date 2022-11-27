export function getTitles(data, size) {
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/";
    const placeholderImage =
        size === 1280
            ? "https://via.placeholder.com/1280x720/000000/FFFFFF/?text=No+image"
            : "https://via.placeholder.com/1280x1920/000000/FFFFFF/?text=No+image";

    if (!data) return [];

    const results = data.results.map((item) => {
        return {
            ...item,
            backdrop_path: item.backdrop_path
                ? IMG_BASE_URL + `w${size}` + item.backdrop_path
                : placeholderImage,
            poster_path: item.poster_path
                ? IMG_BASE_URL + `w${size}` + item.poster_path
                : placeholderImage,
        };
    });

    return results;
}

export function getGenres(data) {
    const results = data.genres;

    return results;
}
