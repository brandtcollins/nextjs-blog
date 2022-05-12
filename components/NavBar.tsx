import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NavLinkItem } from "../ts/interfaces";
import Image from "next/image";
const path = require("path");

const navLinks: NavLinkItem[] = [
  { page: "Blog", path: "/", activePath: "/blog", external: false },
  { page: "Github", path: "https://github.com/brandtcollins", external: true },
];

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { asPath } = useRouter();
  let directoryPath = path.dirname(asPath);
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
    <div className="fixed top-0 h-24  w-full flex justify-center backdrop-blur-xl">
      <div className="max-w-screen-xl w-full flex justify-between">
        <Image
          src="/brandtcollins_logo.svg"
          alt="logo"
          width={225}
          height={125}
        />
        <div className="h-full flex">
          {navLinks.map((linkItem) => (
            <div
              key={linkItem.page}
              className={`mt-6 p-3 rounded-full py-2 px-4 mx-4`}
            >
              {
                <Link href={linkItem.path} passHref>
                  <a target={linkItem.external ? `_blank` : `_self`}>
                    <span
                      className={`dark:text-offWhite ${
                        asPath === linkItem.path ||
                        directoryPath === linkItem.activePath
                          ? `underline`
                          : `opacity-50`
                      }`}
                    >
                      {linkItem.page}
                    </span>
                  </a>
                </Link>
              }
            </div>
          ))}
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
    </div>
  );
};

export default NavBar;
