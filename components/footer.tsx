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
        <ul className="px-4 flex m-auto">
          <li className="hover:bg-whitebgHover p-3 rounded-full py-2 px-4 mx-4">
            <Link href="/">home</Link>
          </li>
          <li className="hover:bg-whitebgHover p-3 rounded-full py-2 px-4 mx-4">
            <Link href="/projects">projects</Link>
          </li>
          <li className="hover:bg-whitebgHover p-3 rounded-full py-2 px-4 mx-4">
            github
          </li>
        </ul>
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
