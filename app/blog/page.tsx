import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog - Arsen Klyuev",
  description: "My blog.",
};

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  );
}
