import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
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
    <div className="fixed top-0 h-24  w-full flex justify-center backdrop-blur-xl border-t border-black border-opacity-10">
      <div className="max-w-screen-xl w-full flex items-center">
        <div className=" w-full h-full">
          <ul className="px-4 flex m-auto justify-center items-center dark:text-offWhite">
            <li className="mt-6 p-3 rounded-full py-2 px-4 mx-4">
              <Link href="/">Blog</Link>
            </li>
            <li className="mt-6 p-3 rounded-full py-2 px-4 mx-4">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="mt-6 p-3 rounded-full py-2 px-4 mx-4">Github</li>
          </ul>
        </div>
        <label className="relative flex justify-between items-center p-2">
          <input
            type="checkbox"
            defaultChecked={darkMode}
            onClick={handleDarkModeToggle}
            className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
          />
          <span className="w-14 h-8 flex items-center flex-shrink-0 ml-4 p-1 bg-medOffWhite rounded-full duration-300 ease-in-out peer-checked:bg-medBlue after:w-6 after:h-6 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
