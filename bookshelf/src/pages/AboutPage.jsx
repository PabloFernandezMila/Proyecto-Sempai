import { PictureAndText } from "../components/about/PictureAndText";
import { Title } from "../components/commons/Title";
import "../assets/styles/about/about.css";
import { Breadcrumb } from "../components/commons/Breadcrumb";

// Title Variables
const aboutTitle = "About Bookshelf";
const aboutSubtitle =
  "Our goal is to share our passion for books with everyone anywhere";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/about";
const secondLinkLabel = "About";

export function AboutPage() {
  return (
    <div className="about-container tint">
      <Title title={aboutTitle} subtitle={aboutSubtitle}></Title>
      <Breadcrumb
        firstLinkTo={firstLinkTo}
        firstLinkLabel={firstLinkLabel}
        secondLinkTo={secondLinkTo}
        secondLinkLabel={secondLinkLabel}
      ></Breadcrumb>
      <PictureAndText></PictureAndText>
    </div>
  );
}
