import Link from "next/link";
import { FunctionComponent } from "react";
import { iPosts } from "../../ts/interfaces";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

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

interface BlogProps {
  posts: iPosts[];
}

const Blog: FunctionComponent<BlogProps> = ({ posts }) => {
  return (
    <div className="max-w-screen-xl w-full">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border-b rounded overflow-hidden flex flex-col py-8 px-4 hover:bg-slate-100"
        >
          <Link href={`/blog/${slug}`}>
            <a>
              <h1 className="text-xl">{frontmatter.title}</h1>
              <h3 className="">
                {formatDistanceToNow(new Date(frontmatter.date), {
                  addSuffix: true,
                })}
              </h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
