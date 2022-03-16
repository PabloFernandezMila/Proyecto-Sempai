import { WelcomeSection } from "../components/home/WelcomeSection";
import { StartToday } from "../components/home/StartToday";
import { BrowseCatalog } from "../components/home/BrowseCatalog";

export function HomePage() {
  return (
    <>
      <WelcomeSection></WelcomeSection>
      <StartToday></StartToday>
      <BrowseCatalog></BrowseCatalog>
    </>
  );
}
