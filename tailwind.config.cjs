/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "overlay-black":
                    "linear-gradient(0deg, rgba(22, 24, 30, 0.5), rgba(22, 24, 30, 0.5))",
                "overlay-black-2":
                    "linear-gradient(180deg, rgba(22, 24, 30, 0) 0%, rgba(22, 24, 30, 0.7) 65.28%), linear-gradient(0deg, rgba(22, 24, 30, 0.4), rgba(22, 24, 30, 0.4))",
                "overlay-horizontal":
                    "linear-gradient(90deg, rgba(217, 217, 217, 0) 0%, rgba(22, 24, 30, 0.11) 52.6%, #16181E 100%)",
                "overlay-horizontal-dark-blue":
                    "linear-gradient(90deg, rgba(217, 217, 217, 0) 0%, rgba(33, 36, 45, 0.11) 52.6%, #21242D 100%)",
            },
            colors: {
                "black-darkest": "#16181E",
                "black-dark": "#21242D",
                "white-gray": "#F9F9F9",
                secondary: "#00B9AE",
                "secondary-hover": "#45ccc4",
                "title-gray": "rgba(249, 249, 249, 0.67)",
                "border-gray": "rgba(249, 249, 249, 0.1)",
                "border-dark": "#47443f",
                "gray-249": "rgba(249, 249, 249, 0.2)",
                "gray-249-5": "rgba(249, 249, 249, 0.5)",
                "dark-blue": "rgb(76 79 86)",
                "dark-blue": "rgb(76 79 86)",
            },
            gridTemplateColumns: {
                main: "15% 63% 22%",
            },
        },
        fontFamily: {
            sans: ["Nunito", "ui-sans-serif", "system-ui"],
        },
    },
    plugins: [],
};
