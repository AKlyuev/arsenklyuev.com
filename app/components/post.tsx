import { CustomMDX } from "app/components/mdx";
import { formatDate } from "app/blog/utils";
import { josefin_sans } from "app/fonts";

export default function Post({ post }) {
  return (
    <div className="mx-auto max-w-2xl">
      <h1
        className={`${josefin_sans.className} uppercase title font-semibold text-2xl tracking-tighter`}
      >
        {post.metadata.title}
      </h1>
      <div className={`leading-7`}>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </div>
    </div>
  );
}
