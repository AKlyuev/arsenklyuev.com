import Bookshelf from "app/components/bookshelf";

export const metadata = {
  title: "Bookshelf - Arsen Klyuev",
  description: "My Bookshelf.",
};

export default function Page() {
  return (
    <section>
      <Bookshelf />
    </section>
  );
}
