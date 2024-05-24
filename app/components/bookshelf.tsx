// pages/bookshelf.js

import React from "react";
import Link from "next/link";
import { getBookPosts } from "app/blog/utils";

const Bookshelf = () => {
  let allBookPosts = getBookPosts();

  // Sort books array by date_finished in reverse chronological order
  const sortedBooks = [...allBookPosts].sort((a, b) => {
    if (!a.metadata.dateFinished && !b.metadata.dateFinished) return 0;
    if (!a.metadata.dateFinished) return -1;
    if (!b.metadata.dateFinished) return 1;
    return (
      +new Date(b.metadata.dateFinished) - +new Date(a.metadata.dateFinished)
    );
  });

  return (
    <div className="container mx-auto dark:text-white">
      <p className="mb-4">
        This is a list of some of the books I've read or am reading. Books I've
        particularly enjoyed have a thicker border around them. A lot of books
        have these thicker borders, because I generally try to only read
        acclaimed books. Some entries have a link to my notes on the book.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedBooks.map((book) => {
          const hasNotes = !!book.content;

          return (
            <div
              key={book.slug}
              className={`bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 dark:bg-gray-800 ${book.metadata.favorite === "true" ? "border-3" : ""}`}
            >
              <Link href={book.metadata.goodReadsLink!}>
                <h2
                  className={`text-lg font-semibold mb-2 dark:text-neutral-300 hover:underline`}
                >
                  {book.metadata.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-600 mb-2 dark:text-neutral-300">
                {book.metadata.bookAuthor}
              </p>
              {hasNotes && (
                <Link
                  href={`/bookshelf/${book.slug}`}
                  className="text-blue-500 hover:underline hover:text-blue-700 transition-colors duration-300"
                >
                  Read Notes
                </Link>
              )}
              {book.metadata.dateFinished && (
                <p className="text-sm text-gray-600">
                  Finished: {book.metadata.dateFinished}
                </p>
              )}
              {!book.metadata.dateFinished && (
                <span className="inline-block bg-yellow-500 text-white px-2 py-1 rounded-full text-xs mt-2">
                  Currently Reading
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Bookshelf;
