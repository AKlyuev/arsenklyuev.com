// pages/bookshelf.js

import React from 'react';
import Link from 'next/link';

const Bookshelf = () => {
  // Sample data for books
  const books = [
    {
      id: 1,
      title: "Book Title 1",
      author: "Author Name 1",
      notes: "Some notes about Book 1...",
      slug: "book1",
      favorite: true,
      date_finished: "2022-05-01" 
    },
    {
      id: 2,
      title: "Book Title 2",
      author: "Author Name 2",
      slug: "book2",
      favorite: false,
      date_finished: "2022-04-15"
    },
    {
      id: 3,
      title: "Book Title 3",
      author: "Author Name 3",
      slug: "book3",
      favorite: true,
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
      <p className="mb-4">This is a list of some of the books I've read or am reading. Books I've particularly enjoyed have a darker border around them. Some entries have a link to my notes on the book.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedBooks.map(book => (
          <div key={book.id} className={`bg-white shadow-md p-4 ${book.favorite ? 'border-2' : ''}`}>
            <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{book.author}</p>
            {book.notes && (
              <Link href={`/books/${book.slug}`} className="text-blue-500">
                Read Notes
              </Link>
            )}
            {book.date_finished && (
              <p className="text-sm text-gray-600">Date Finished: {book.date_finished}</p>
            )}
            {!book.date_finished && (
              <span className="inline-block bg-yellow-500 text-white px-2 py-1 rounded-full text-xs mt-2">Currently Reading</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
