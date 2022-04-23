import { RelatedBook } from "./RelatedBook";
import { useEffect, useState } from "react";
import { api } from "../../api/api";

export function RelatedContent(props) {
  const bookcategory = props.bookcategory;
  const idOnly = props.idOnly;
  const [listOfRelatedBooks, setListOfRelatedBooks] = useState([]);
  //Get info from Json Server
  useEffect(() => {
    //Get books related using the category of the book displayed on the landing page
    const listURL = "/books/categories/" + bookcategory;
    api.get(listURL).then(function (response) {
      const books = response.data;

      //Update list with the books returned
      setListOfRelatedBooks(books);
    });
  }, [bookcategory]);

  //Map the books list with the listOfRelatedBooksvariables, also check if the of the current book is on the related list, ignores it when creates all the books
  const booksFromDB = listOfRelatedBooks.map(function (book) {
    return "" + book.id !== idOnly ? (
      <RelatedBook
        key={book.id}
        id={book.id}
        bookbackgroundimageurl={book.bookbackgroundimageurl}
        bookdescription={book.bookdescription}
        bookauthor={book.bookauthor}
        booktitle={book.booktitle}
      />
    ) : null;
  });

  const areRelatedBooks = booksFromDB.length > 1;
  return (
    <div className="related-content roboto-white">
      <h2>Related content</h2>
      <hr></hr>

      {areRelatedBooks ? (
        <div className="related-content-container">{booksFromDB}</div>
      ) : (
        <div
          className="related-content-container"
          style={{ display: "block", minHeight: "auto", padding: 0 }}
        >
          <p className="roboto-white title-h2" style={{ padding: 0 }}>
            There is not related content for the current book
          </p>
        </div>
      )}
    </div>
  );
}
