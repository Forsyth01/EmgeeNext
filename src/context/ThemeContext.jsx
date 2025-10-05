"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // ✅ Load saved theme only on client (Next.js renders server-side too)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);

      // Apply immediately on mount
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // ✅ Sync theme to <html> and localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ✅ Safe custom hook
export const useTheme = () => useContext(ThemeContext);
