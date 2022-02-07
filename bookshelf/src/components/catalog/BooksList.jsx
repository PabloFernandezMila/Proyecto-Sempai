import { BookCard } from "./BookCard";
import { api } from "../../api/api.js";
import { useEffect } from "react";
import { useState } from "react";

export function BooksList(props) {
  const [booksList, setBookList] = useState([]);

  //Get info from Json Server
  useEffect(() => {
    //Get books

    //This prop is the filtered get from the DB
    let filterApplied = props.filterApplied;
    api.get(filterApplied).then(function (response) {
      const books = response.data;
      console.log(filterApplied);
      //Update list with the books retrieved from the server
      setBookList(books);
    });
  }, []);

  //For each book retrieve from the server, the system maps the book properties into a Book card
  const booksFromDB = booksList.map(function (book) {
    return (
      <BookCard
        key={book.id}
        bookTitle={book.bookTitle}
        bookBackgroundImageURL={book.bookBackgroundImageURL}
        bookDescription={book.bookDescription}
        bookAuthor={book.bookAuthor}
      />
    );
  });

  //Return a collection of book cards
  return (
    <section className="catalog-section">
      <div className="books-wrapper">{booksFromDB}</div>
    </section>
  );
}
