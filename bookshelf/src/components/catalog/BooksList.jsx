import { BookCard } from "./BookCard";
import { api } from "../../api/api.js";
import { useEffect } from "react";
import { useState } from "react";

export function BooksList(props) {
  const [booksList, setBookList] = useState([]);

  //Get info from Json Server
  useEffect(() => {
    //Get books

    //This prop is the filtered URL

    api.get(props.filterApplied).then(function (response) {
      const books = response.data;
      console.log(props.filterApplied);
      //Update list with the books retrieved from the server
      setBookList(books);
    });
  }, [props.filterApplied]);

  //For each book retrieve from the server, the system maps the book properties into a Book card
  const booksFromDB = booksList.map(function (book) {
    return (
      <BookCard
        key={book.id}
        id={book.id}
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
      {/* Conditional message if the results is empty */}
      {booksFromDB.length > 0 ? (
        <div className="books-wrapper">{booksFromDB}</div>
      ) : (
        <h2 className="roboto-white title-h2">
          This shelf is empty, please try another
        </h2>
      )}
    </section>
  );
}
