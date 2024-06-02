import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog - Arsen Klyuev",
  description: "My blog.",
};

export default function Page() {
  return (
    <section>
      <p className={`leading-7 mb-4`}>
        Writing helps me understand what I've learned and pass on the knowledge to others. Hope you find something useful!
      </p>
      <BlogPosts />
    </section>
  );
}
