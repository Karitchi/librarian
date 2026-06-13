import type { Route } from "./+types/books";
import { BookCard } from "../components/BookCard";
import { useState, useEffect } from "react";

// Client-only data loader
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  // Fetch from your API endpoint
  // const response = await fetch('/api/books');
  // const books = await response.json();
  //
  const books = [
    {
      id: "book-001",
      title: "The Midnight Library",
      author: "Matt Haig",
      publishedYear: 2020,
      genre: "Fiction",
      rating: 4.2
    },
    {
      id: "book-002",
      title: "Project Hail Mary",
      author: "Andy Weir",
      publishedYear: 2021,
      genre: "Science Fiction",
      rating: 4.7
    },
    {
      id: "book-003",
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      publishedYear: 2017,
      genre: "Historical Fiction",
      rating: 4.5
    },
    {
      id: "book-004",
      title: "Dune",
      author: "Frank Herbert",
      publishedYear: 1965,
      genre: "Science Fiction",
      rating: 4.8
    },
    {
      id: "book-005",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedYear: 1813,
      genre: "Classic",
      rating: 4.6
    }
  ];
  return { books };
}

// Optional: Show loading UI while clientLoader runs
export function HydrateFallback() {
  return <div>Loading books...</div>;
}

// Component receives data from clientLoader
export default function Books({ loaderData }: Route.ComponentProps) {
  const { books } = loaderData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
}
