/* @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            height: {
                "new-screen": "calc(100vh - 51px)",
                "new-screen-2": "calc(100vh - 101px)",
            },
            flexBasis: {
                "almost-1/2": "calc(50% - 0.625rem)",
                "almost-1/3": "calc(33.333333% - 0.84rem)",
            },
            width: {
                "almost-1/3": "calc(33.333333% - 0.84rem)",
            },
        },
    },
    plugins: [],
};
