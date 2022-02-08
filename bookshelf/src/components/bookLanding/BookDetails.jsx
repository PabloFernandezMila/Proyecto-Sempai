import "../../assets/styles/bookLanding/bookDetails.css";

export function BookDetails(props) {
  const bookBackgroundImageURL = props.bookBackgroundImageURL;
  const bookFullDescription = props.bookFullDescription;

  return (
    <>
      <div className="book-cover">
        <img src={bookBackgroundImageURL} alt="Book Cover"></img>
      </div>
      <div className="buttons-container">
        <button type="button" id="wishlist">
          Add to Wishlist
        </button>
        <button type="button" id="request-book">
          Add to Library
        </button>
      </div>
      <div className="book-info">
        <div className="book-information">
          <h3 className="roboto-white">Description</h3>
          {bookFullDescription.split("\n").map((paragraph, i) => (
            <p key={i} className="roboto-white">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
