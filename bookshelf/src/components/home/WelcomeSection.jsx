import "../../assets/styles/home/welcomeSection.css";
import { HashLink } from "react-router-hash-link";

export function WelcomeSection() {
  return (
    <section id="section1" className="tint">
      <div id="section1-wrapper">
        <div id="column1">
          <div className="centered">
            <h1 className="roboto-white">Welcome to Bookshelf</h1>
            <h2 className="roboto-white">
              Take your books anywhere and anytime.
            </h2>
            <h2 className="roboto-white">Pick yours from our wide catalog.</h2>
          </div>
        </div>
        <div id="column2">
          <div id="column2-image" className="centered-vertically"></div>
        </div>
        <div className=" arrow-container ">
          <HashLink className="bounce down-arrow" to="#section2"></HashLink>
        </div>
      </div>
    </section>
  );
}
