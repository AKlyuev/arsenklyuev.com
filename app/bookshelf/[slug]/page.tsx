import { notFound } from "next/navigation";
import { getBookPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import Post from "app/components/post";

export async function generateStaticParams() {
  let posts = getBookPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getBookPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/bookshelf/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function BookPost({ params }) {
  // we only want to make a page for book posts that have content
  let post = getBookPosts().find((post) => post.slug === params.slug && post.content);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/bookshelf/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Arsen Klyuev",
              url: "https://www.arsenklyuev.com",
            },
          }),
        }}
      />
      <Post post={post} />
    </section>
  );
}
