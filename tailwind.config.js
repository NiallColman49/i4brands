/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "i4brands-slate": "#868882",
                "i4brands-grey": "#d5d5cd",
                "i4brands-off-white": "#f8f8f2",
            },
            fontFamily: {
                favorit: "Favorit, sans-serif",
            },
            fontSize: {
                80: "12rem",
            },
            animation: {
                marquee: "marquee 25s linear infinite",
                marquee2: "marquee2 25s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
        },
    },
    plugins: [],
};
