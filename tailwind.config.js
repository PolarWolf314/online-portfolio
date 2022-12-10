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
        },
    },
    plugins: [],
};
