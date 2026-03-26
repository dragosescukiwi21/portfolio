import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Blog",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight">blog</h1>
      <hr className="page-title-divider" />
      <div className="flex flex-col gap-0">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-baseline justify-between p-3 rounded-lg backdrop-blur-md bg-white/40 dark:bg-neutral-900/40 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <h2 className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                {post.metadata.title}
              </h2>
              <span className="text-sm text-neutral-400 dark:text-neutral-500 tabular-nums shrink-0 ml-4">
                {formatDate(post.metadata.publishedAt, false)}
              </span>
            </Link>
          ))}
      </div>
    </section>
  );
}
