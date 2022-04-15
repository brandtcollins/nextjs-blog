import Link from "next/link";
import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="fixed bottom-0 h-24  w-full flex justify-center backdrop-blur-xl border-t border-black border-opacity-10">
      <div className="max-w-screen-xl w-full flex items-center">
        <ul className="px-4 flex m-auto">
          <li className="px-4">
            <Link href="/">home</Link>
          </li>
          <li className="px-4">
            <Link href="/blog">blog</Link>
          </li>
          <li className="px-4">github</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
