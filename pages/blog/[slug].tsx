import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { FunctionComponent } from "react";
import md from "markdown-it";
import { iFrontmatter, iPosts } from "../../ts/interfaces";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

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
  frontmatter: iFrontmatter;
  content: string;
}

const PostPage: FunctionComponent<PostPageProps> = ({
  frontmatter,
  content,
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col mt-28">
      <Head>
        <title>{frontmatter.title}</title>
        <meta property="og:title" content={frontmatter.title} key="title" />
        <meta name="description" content={frontmatter.metaDesc}></meta>
      </Head>
      <div className="py-8">
        <Link href="/">
          <span className="dark:text-offWhite">Back</span>
        </Link>
      </div>
      <div className="prose dark:prose-invert mx-auto ">
        <h1>{frontmatter.title}</h1>
        <p>
          {formatDistanceToNow(new Date(frontmatter.date), {
            addSuffix: true,
          })}
        </p>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </div>
  );
};

export default PostPage;
