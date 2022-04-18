import Link from "next/link";
import { FunctionComponent } from "react";
import Footer from "./footer";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-offWhite dark:bg-darkBlue">
      <div className="flex justify-center px-4">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
