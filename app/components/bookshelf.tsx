// pages/bookshelf.js

import React from "react";
import Link from "next/link";

const Bookshelf = () => {
  // Sample data for books
  const books = [
    {
      id: 1,
      title: "The Perfect Weapon: How the Cyber Arms Race Set the World Afire",
      author: "David E. Sanger",
      slug: "perfect_weapon",
      favorite: false,
    },
    {
      id: 2,
      title: "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness",
      author: "Eric Jorgenson",
      slug: "navals_almanack",
      favorite: true,
    },
    {
      id: 3,
      title:
        "Thinking Strategically: The Competitive Edge in Business, Politics, and Everyday Life",
      author: "Avinash K. Dixit",
      slug: "thinking_strategically",
      favorite: false,
    },
    {
      id: 4,
      title: "Flash Boys: A Wall Street Revolt",
      author: "Michael Lewis",
      slug: "flash_boys",
      favorite: true,
      date_finished: "2024-04-29",
      notes:
        "The first book that helped me truly get a sense of what high frequency traders actually do. An excellent exposé of Wall Street corruption. It is both a great story and interesting explanation of the arbitrage HFTs do by using low-latency infrastructure and techniques that let them execute trades faster than everyone else. Not to mention the big banks that enable them. I didn't realize it was possible to get guaranteed returns in the stock market, but it is via legal arbitrage techniques like the ones HFTs implement. No wonder they make so much money.",
    },
    {
      id: 5,
      title:
        "Killers of the Flower Moon: The Osage Murders and the Birth of the FBI",
      author: "David Grann",
      slug: "flower_moon",
      favorite: true,
      date_finished: "2024-04-19",
      notes:
        "An unbelievable true story of betrayal on a level I've hardly heard of. Very hard to put down. The author deserves much, much praise. ",
    },
    // Add more books as needed
  ];

  // Sort books array by date_finished in reverse chronological order
  const sortedBooks = [...books].sort((a, b) => {
    if (!a.date_finished && !b.date_finished) return 0;
    if (!a.date_finished) return -1;
    if (!b.date_finished) return 1;
    return +new Date(b.date_finished) - +new Date(a.date_finished);
  });

  return (
    <div className="container mx-auto py-8">
      <p className="mb-4">
        This is a list of some of the books I've read or am reading. Books I've
        particularly enjoyed have a darker border around them. A lot of books
        have these darker borders, because I generally try to only read acclaimed books. Some
        entries have a link to my notes on the book.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedBooks.map((book) => (
          <div
            key={book.id}
            className={`bg-white shadow-md p-4 ${book.favorite ? "border-2" : ""}`}
          >
            <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{book.author}</p>
            {book.notes && (
              <Link href={`/books/${book.slug}`} className="text-blue-500">
                Read Notes
              </Link>
            )}
            {book.date_finished && (
              <p className="text-sm text-gray-600">
                Date Finished: {book.date_finished}
              </p>
            )}
            {!book.date_finished && (
              <span className="inline-block bg-yellow-500 text-white px-2 py-1 rounded-full text-xs mt-2">
                Currently Reading
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
