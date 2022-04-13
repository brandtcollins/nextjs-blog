import Link from "next/link";
import { FunctionComponent } from "react";
import Footer from "./footer";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="flex justify-center pt-32 px-4">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;