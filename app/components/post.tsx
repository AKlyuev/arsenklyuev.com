import { CustomMDX } from "app/components/mdx";
import { formatDate } from "app/blog/utils";

export default function Post({ post }) {
  return (
    <div className="max-w-2xl">
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
}
