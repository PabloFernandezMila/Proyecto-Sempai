import "../../assets/styles/home/startToday.css";
import { Link } from "react-scroll";

export function StartToday() {
  return (
    <section id="section2">
      <div id="section2-content" className="tint">
        <h1 className="roboto-white">Start today</h1>
        <p className="roboto-white">
          Browse our wide catalog and select the titles that you like.
        </p>
        <p className="roboto-white">
          Immerse in your reading whenever you want, carry all the books with
          you.
        </p>
        <Link id="section2-button" className="section-button roboto-white">
          Create an account
        </Link>
      </div>

      <div className="arrow-container">
        <Link className="bounce down-arrow" to="section3" smooth={true}></Link>
      </div>
    </section>
  );
}
