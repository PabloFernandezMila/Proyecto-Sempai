import "../../assets/styles/home/welcomeSection.css";

import { DownArrow } from "../commons/DownArrow";

export function WelcomeSection() {
  return (
    <section id="section1">
      <div id="section1-background" className="tint">
        <div id="section1-wrapper">
          <div id="column1">
            <div className="centered">
              <h1 className="roboto-white">Welcome to Bookshelf</h1>
              <h2 className="roboto-white">
                Take your books anywhere and anytime.
              </h2>
              <h2 className="roboto-white">
                Pick yours from our wide catalog.
              </h2>
            </div>
          </div>
          <div id="column2">
            <div id="column2-image"></div>
          </div>
          <DownArrow to="#section2"></DownArrow>
        </div>
      </div>
    </section>
  );
}
