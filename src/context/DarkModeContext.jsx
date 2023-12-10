import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

import styles from "../custom-toast.module.css";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("DARK");

  useEffect(() => {
    if (theme === "DARK") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "LIGHT" ? "DARK" : "LIGHT";
    toast("Switched Mode...", {
      className: `${theme === "DARK" ? "dark-toast" : "light-toast"}`,
      autoClose: 3000,
    });
    setTheme(newTheme);
    localStorage.setItem("darkMode", JSON.stringify(newTheme));
    if (newTheme === "DARK") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    const themeLS = JSON.parse(localStorage.getItem("darkMode"));
    if (themeLS) {
      setTheme(themeLS);
      document.body.classList.toggle("dark", themeLS === "DARK");
    }
  }, []);
  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
