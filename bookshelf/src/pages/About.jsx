import { PictureAndText } from "../components/about/PictureAndText";
import { Title } from "../components/about/Title";

export function About() {
  return (
    <div className="about-container tint">
      <Title></Title>
      <PictureAndText></PictureAndText>
    </div>
  );
}
