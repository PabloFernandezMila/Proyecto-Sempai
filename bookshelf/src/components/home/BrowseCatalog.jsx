import "../../assets/styles/home/browseCatalog.css";
import { Link } from "react-router-dom";
export function BrowseCatalog() {
  return (
    <section id="section3" className="tint">
      <div id="section3-content" className="tint">
        <div id="section3-content-text" className="section3-position">
          <h1 className="roboto-white">Over 1000+ titles available!</h1>
          <p className="roboto-white">
            Don&apos;t know what to read? Bored of finding the same books
            everywhere?
          </p>
          <p className="roboto-white">
            On our site you will find more than 1000 titles, some indie writers,
            unprinted titles, old and new editions of classic books and much
            more.
          </p>

          <Link
            id="section3-button"
            className="section-button roboto-white section3-position"
            to="/catalog"
          >
            Browse our Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
