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
    <div className="max-w-screen-xl w-full">
      <h3 className="text-3xl font-bold text-medOffWhite dark:text-medBlue">
        2022
      </h3>
      {sortedPosts.reverse().map(({ slug, frontmatter }) => (
        <Link key={slug} href={`/blog/${slug}`}>
          <div className="cursor-pointer rounded overflow-hidden flex py-6 px-4 hover:bg-whitebgHover dark:hover:bg-hoverDarkBlue dark:text-offWhite">
            <div>
              <h1 className="text-xl text-darkBlue dark:text-offWhite inline-block">
                {frontmatter.title}
              </h1>
              <h2 className=" text-mediumGray dark:text-medBlue inline-block pl-2">
                {formatDistanceToNow(new Date(frontmatter.date), {
                  addSuffix: true,
                })}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogFeed;
