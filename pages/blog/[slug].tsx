import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { FunctionComponent } from "react";
import md from "markdown-it";
import { iPosts } from "../../ts/interfaces";

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface PostPageProps {
  frontmatter: iPosts[];
  content: string;
}

const PostPage: FunctionComponent<PostPageProps> = ({
  frontmatter,
  content,
}) => {
  console.log(frontmatter);
  console.log(content);
  return (
    <div className="prose mx-auto">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
};

export default PostPage;
