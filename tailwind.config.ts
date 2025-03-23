import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html",], 
    darkMode: "class", 
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;
