import Link from "next/link";
import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="fixed bottom-0 h-24 bg-slate-400 w-full flex justify-center">
      <div className="bg-slate-200 max-w-screen-xl w-full">
        <ul className="">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
          <li>github</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
