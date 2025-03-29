import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Browser Extensions Manager UI",
  description: "A solution to the Frontend Mentor challenge for managing browser extensions with light/dark mode, filtering, and responsive design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased `}>
        <Nav /> 
        {children}
      </body>
    </html>
  );
}