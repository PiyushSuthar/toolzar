import React, { useState } from "react";
import { Moon, Sun } from "react-feather";
import styles from "./darkmodeToggle.module.css";

export default function DarkModeToggle() {
  if (typeof Window !== "undefined") {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme") || "light"
    );
  }
  const [theme, setTheme] = useState(() => {
    if (typeof Window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  function toggleTheme() {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }
  return (
    <>
      {theme === "light" ? (
        <Moon
          style={{ cursor: "pointer" }}
          size="30"
          onClick={toggleTheme}
          strokeWidth="1"
          className={styles.darkmode_toggle}
        />
      ) : (
        <Sun
          style={{ cursor: "pointer" }}
          color="white"
          size="30"
          onClick={toggleTheme}
          className={styles.darkmode_toggle}
        />
      )}
    </>
  );
}
