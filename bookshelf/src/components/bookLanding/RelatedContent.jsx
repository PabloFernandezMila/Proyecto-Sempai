import { RelatedBook } from "./RelatedBook";
import { useEffect, useState } from "react";
import { api } from "../../api/api";

export function RelatedContent(props) {
  const bookCategory = props.bookCategory;
  const idOnly = props.idOnly;
  const [listOfrelatedBooks, setListOfrelatedBooks] = useState([]);
  //Get info from Json Server
  useEffect(() => {
    //Get books related using the category of the book displayed on the landing page
    const listURL = "http://localhost:4000/books?bookCategory=" + bookCategory;
    api.get(listURL).then(function (response) {
      const books = response.data;

      //Update list with the books returned
      setListOfrelatedBooks(books);
    });
  }, [bookCategory]);

  //Map the books list with the variables, also check if the of the current book is on the related list, ignores it when creates all the books
  const booksFromDB = listOfrelatedBooks.map(function (book) {
    return "" + book.id !== idOnly ? (
      <RelatedBook
        key={book.id}
        id={book.id}
        bookBackgroundImageURL={book.bookBackgroundImageURL}
        bookDescription={book.bookDescription}
        bookAuthor={book.bookAuthor}
      />
    ) : null;
  });

  const areRelatedBooks = booksFromDB.length > 1;
  return (
    <div className="related-content roboto-white">
      <h2>Related content</h2>
      <hr></hr>
      {/* Check if the length of booksFromDB is bigger than 1, if its 1 it only contains the book of landing page, hence the section should be empty */}

      {areRelatedBooks ? (
        <div className="related-content-container">{booksFromDB}</div>
      ) : (
        <div
          className="related-content-container"
          style={{ display: "block", minHeight: "auto", padding: 0 }}
        >
          <h2 className="roboto-white title-h2" style={{ padding: 0 }}>
            There is not related content for the current book
          </h2>
        </div>
      )}
    </div>
  );
}
