import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    toggleDarkMode();
  }, [darkMode]);

  const handleDarkModeToggle = (e: any) => {
    setDarkMode(e.target.checked);
    toggleDarkMode();
  };
  return (
    <div className="fixed bottom-0 h-24  w-full flex justify-center backdrop-blur-xl border-t border-black border-opacity-10">
      <div className="max-w-screen-xl w-full flex items-center">
        <div className="bg-offWhite/50 w-full h-full">
          <ul className="px-4 flex m-auto justify-center items-center">
            <li className="mt-6 p-3 rounded-full py-2 px-4 mx-4 mix-blend-multiply">
              <Link href="/">Blog</Link>
            </li>
            <li className="mt-6 p-3 rounded-full py-2 px-4 mx-4">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="mt-6 p-3 rounded-full py-2 px-4 mx-4">Github</li>
          </ul>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            defaultChecked={darkMode}
            onClick={handleDarkModeToggle}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Footer;
