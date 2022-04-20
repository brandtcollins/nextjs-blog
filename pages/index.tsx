import { FunctionComponent } from "react";
import { iPosts } from "../ts/interfaces";
import fs from "fs";
import matter from "gray-matter";
import BlogFeed from "../components/BlogFeed";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}

interface HomeProps {
  posts: iPosts[];
}

const Home: FunctionComponent<HomeProps> = ({ posts }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="mt-48 mb-24 py-6 px-4 border-4 border-whitebgHover rounded dark:border-lightGray dark:text-offWhite">
        <p className="py-2">Hello!</p>
        <p>
          I'm Brandt, I am a front end web developer and UX/UI designer. Here, I
          write about things I've learned the hard way so you don't have to.
          There's also some on-going projects to check out{" "}
          <Link href="/projects">here.</Link>
        </p>
      </div>
      <BlogFeed posts={posts} />
    </div>
  );
};

export default Home;
