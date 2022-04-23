import { BookCard } from "../catalog/BookCard";
import { api } from "../../api/api.js";
import { useEffect } from "react";
import { useState } from "react";
import { Loader } from "../commons/Loader";

export function SearchList(props) {
  const [booksList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  let inputSearch = props.inputSearch;

  //Get info from Server
  useEffect(() => {
    //Get books
    //Display loader by setting it true
    setLoading(true);

    //This prop is the filtered URL
    api
      .post("/search", {
        search: inputSearch,
      })
      .then(
        function (response) {
          const books = response.data;

          //Hide loader by setting it  false
          setLoading(false);
          //Update list with the books retrieved from the server
          setBookList(books);
        },
        () => {
          setLoading(false);
        }
      );
  }, [inputSearch]);

  //For each book retrieve from the server, the system maps the book properties into a Book card
  const booksFromDB = booksList.map(function (book) {
    return (
      <BookCard
        key={book.id}
        id={book.id}
        booktitle={book.booktitle}
        bookbackgroundimageurl={book.bookbackgroundimageurl}
        bookdescription={book.bookdescription}
        bookauthor={book.bookauthor}
      />
    );
  });

  //Return a collection of book cards after loading
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <section className="catalog-section">
          {/* Conditional message if the results is empty */}
          {booksFromDB.length > 0 ? (
            <div className="books-wrapper">{booksFromDB}</div>
          ) : (
            <p className="roboto-white">No books found, try another input</p>
          )}
        </section>
      )}
    </>
  );
}
