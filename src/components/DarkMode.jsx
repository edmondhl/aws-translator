import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "system"
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = (theme) => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
      if (darkQuery.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const changeHandler = (e) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
      }
    };

    darkQuery.addEventListener("change", changeHandler);
    return () => darkQuery.removeEventListener("change", changeHandler);
  }, []);

  return [theme, setTheme];
};

export default useDarkMode;
