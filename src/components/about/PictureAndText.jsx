import "../../assets/styles/about/pictureAndText.css";

export function PictureAndText() {
  return (
    <section className="pictureAndText">
      <div className="about-section-wrapper">
        <div id="about-image-wrapper" className="centered">
          <div id="about-image" className="centered"></div>
        </div>
        <div id="about-text">
          <p className="roboto-white about-p">
            Just over a year ago, we were fascinated by the idea of making books
            available to everyone anytime, anywhere.
          </p>
          <p className="roboto-white  about-p">
            What if you travel through Europe and want to read a classic novel?
            Or do you want to read the full history of a historical place before
            visiting it?
          </p>

          <p className="roboto-white about-p">
            It may sound crazy, but we wanted to build the closest thing to a
            bookshelf that is available for all. While there are many ways to
            carry or read a book, we realized that there is no better way to
            carry them than through e-books.
          </p>
          <p className="roboto-white about-p">
            Some books are heavy or difficult to find in a retail store.
            Bookshelf has an extensive library with thousands of copies that are
            available 24/7 on our online platform and can be easily downloaded.
          </p>
        </div>
      </div>
    </section>
  );
}
