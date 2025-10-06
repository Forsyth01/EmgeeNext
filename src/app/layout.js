import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Footer } from "@/components";

// --- Font ---
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional, choose the weights you need
});

// --- Metadata (SEO, favicon, etc.) ---
export const metadata = {
  title: "George",
  description:
    "Emgee is a UI/UX designer and graphic designer with 5 years of experience creating engaging, user-focused digital and visual designs.",
 icons: {
    icon: "/favicon.png", // ✅ Now points to root
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Dark Mode Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const storedTheme = localStorage.getItem("theme");
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = storedTheme || (prefersDark ? "dark" : "light");
                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              })();
            `,
          }}
        />
      </head>

      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>{children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
