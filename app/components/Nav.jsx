"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Nav() {
  const [theme, setTheme] = useState("dark");
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <nav>
      <div className="flex justify-between items-center">
        <Image
          src={
            theme === "light" ? "/images/logo.svg" : "/images/logo.png 1.svg"
          }
          alt="Logo"
          width={150}
          height={100}
          className="cursor-pointer"
          onClick={handleLogoClick}
        />
        <button onClick={toggleTheme} className="focus:outline-none">
          {theme === "light" ? (
            <Image
              src="/images/icon-moon.svg"
              alt="Switch to dark mode"
              width={40}
              height={24}
              className="cursor-pointer p-2 rounded-xl"
              style={{
                backgroundColor: "var(--neutral-100)",
                transition: "background-color 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--neutral-300)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--neutral-100)";
              }}
            />
          ) : (
            <Image
              src="/images/icon-sun.svg"
              alt="Switch to light mode"
              width={40}
              height={24}
              className="cursor-pointer p-2 rounded-xl"
              style={{ backgroundColor: "var(--neutral-700)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--neutral-600)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--neutral-700)";
              }}
            />
          )}
        </button>
      </div>
    </nav>
  );
}
