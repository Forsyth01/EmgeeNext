import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

// --- Fonts ---
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- Metadata (SEO, favicon, etc.) ---
export const metadata = {
  title: "George",
  description:
    "Emgee is a UI/UX designer and graphic designer with 5 years of experience creating engaging, user-focused digital and visual designs.",
  icons: {
    icon: "/images/profilepic.png", // make sure this image is in your /public/images folder
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

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
