import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { FunctionComponent } from "react";
import { iPosts } from "../ts/interfaces";

interface BlogFeedProps {
  posts: iPosts[];
}

const BlogFeed: FunctionComponent<BlogFeedProps> = ({ posts }) => {
  const sortedPosts = posts.sort((a, b) => {
    var dateA = new Date(a.frontmatter.date);
    var dateB = new Date(b.frontmatter.date);
    return dateA.valueOf() - dateB.valueOf();
  });

  return (
    <div className="max-w-screen-xl w-full h-screen">
      <h3 className="text-xl font-bold">2022</h3>
      {sortedPosts.reverse().map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border-b rounded overflow-hidden flex flex-col py-8 px-4 hover:bg-whitebgHover dark:hover:bg-hoverDarkBlue dark:border-lightGray dark:text-offWhite"
        >
          <Link href={`/blog/${slug}`}>
            <a>
              <h1 className="text-xl">{frontmatter.title}</h1>
              <h3 className="dark:text-lightGray">
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

export default BlogFeed;
