import { PictureAndText } from "../components/about/PictureAndText";
import { Title } from "../components/commons/Title";
import "../assets/styles/about/about.css";

const aboutTitle = "About Bookshelf";
const aboutSubtitle =
  "Our goal is to share our passion for books with everyone anywhere";

export function About() {
  return (
    <div className="about-container tint">
      <Title title={aboutTitle} subtitle={aboutSubtitle}></Title>
      <PictureAndText></PictureAndText>
    </div>
  );
}
