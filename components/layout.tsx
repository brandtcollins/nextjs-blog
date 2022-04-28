import { FunctionComponent } from "react";
import NavBar from "./NavBar";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-offWhite dark:bg-darkBlue min-h-screen duration-300 ease-in-out">
      <div className="flex justify-center mx-auto max-w-prose">
        {children}
        <NavBar />
      </div>
    </div>
  );
};

export default Layout;
