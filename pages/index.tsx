import { FunctionComponent } from "react";
import { iPosts } from "../ts/interfaces";
import fs from "fs";
import matter from "gray-matter";
import BlogFeed from "../components/BlogFeed";

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
      <div className="mt-48 mb-6 py-6 px-4 border rounded">
        This is filler text.
      </div>
      <BlogFeed posts={posts} />
    </div>
  );
};

export default Home;
