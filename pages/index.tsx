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
  return <BlogFeed posts={posts} />;
};

export default Home;
