import Link from "next/link";
import { FunctionComponent } from "react";
import Footer from "./footer";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-offWhite dark:bg-darkBlue min-h-screen">
      <div className="flex justify-center mx-auto max-w-prose">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
