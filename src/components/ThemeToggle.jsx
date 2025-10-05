import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className={`w-14 h-8 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300
        ${theme === "light" ? "justify-start bg-[#E2E2E2]" : "justify-end bg-[#36362d] shadow-xl"}`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-6 h-6 rounded-full bg-[#C2DE3A] dark:bg-[#C2DE3A] flex items-center justify-center shadow-md"
      >
        {theme === "light" ? (
          <Sun size={16} className="text-white  rounded-full" />
        ) : (
          <Moon size={16} className="text-black" />
        )}
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
