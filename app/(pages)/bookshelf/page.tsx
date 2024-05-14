import Bookshelf from "app/components/bookshelf";

export const metadata = {
  title: "Bookshelf - Arsen Klyuev",
  description: "My Bookshelf.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Bookshelf
      </h1>
      <Bookshelf />
    </section>
  );
}
