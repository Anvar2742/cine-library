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

export function getSingleTitle(data, size) {
    if (!data) return [];

    const IMG_BASE_URL = "https://image.tmdb.org/t/p/";
    const placeholderImage =
        size === 1280
            ? "https://via.placeholder.com/1280x720/000000/FFFFFF/?text=No+image"
            : "https://via.placeholder.com/1280x1920/000000/FFFFFF/?text=No+image";

    const results = {
        ...data,
        backdrop_path: data.backdrop_path
            ? IMG_BASE_URL + `w${size}` + data.backdrop_path
            : placeholderImage,
        poster_path: data.poster_path
            ? IMG_BASE_URL + `w${size}` + data.poster_path
            : placeholderImage,
    };

    return results;
}

// 375 000 000
export function convertMoney(num) {
    const numArr = num.toString().split("");
    const numArrLength = numArr.length;
    const numTitlesArr = ["k", "mln", "bln"];
    let splitNum = num;

    if (numArrLength > 9) {
        let splitNum = numArr.slice(0, numArrLength - 9).join("");
        return splitNum + numTitlesArr[2];
    } else if (numArrLength > 6) {
        let splitNum = numArr.slice(0, numArrLength - 6).join("");
        return splitNum + numTitlesArr[1];
    } else if (numArrLength > 5) {
        let splitNum = numArr.slice(0, numArrLength - 3).join("");
        return splitNum + numTitlesArr[0];
    } else {
        return splitNum;
    }
}
