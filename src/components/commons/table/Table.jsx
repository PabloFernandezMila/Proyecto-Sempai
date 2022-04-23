import { Row } from "./Row";

export function Table(props) {
  //For each book retrieve from the server, the system maps the book properties into a Book card
  const booksFromDB = props.booksList.map(function (book) {
    return (
      <Row
        key={book.id}
        id={book.id}
        bookTitle={book.booktitle}
        bookBackgroundImageURL={book.bookbackgroundimageurl}
        bookAuthor={book.bookauthor}
        bookCategory={book.categoryname}
        selectedFilter={props.selectedfilter}
        setSelectedFilter={props.setSelectedfilter}
        removeEndpoint={props.removeEndpoint}
      />
    );
  });
  return (
    //TODO Fix hover effect
    <div className="roboto-white">
      <div>
        <div className="wishlists-grid-headers">
          <div className="wishlists-grid-header" style={{ width: "20vw" }}>
            Title
          </div>
          <div className="wishlists-grid-header" style={{ width: "20vw" }}>
            Author
          </div>
          <div className="wishlists-grid-header" style={{ width: "20vw" }}>
            Category
          </div>
          <div className="wishlists-grid-header" style={{ width: "125px" }}>
            Cover
          </div>
          <div className="wishlists-grid-header" style={{ width: "100px" }}>
            Actions
          </div>
        </div>
        {booksFromDB}
      </div>
    </div>
  );
}
