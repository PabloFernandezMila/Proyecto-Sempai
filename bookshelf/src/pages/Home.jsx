import { Header } from "../components/general/Header";
import { WelcomeSection } from "../components/home/WelcomeSection";
import { Footer } from "../components/general/Footer";
import {StartToday} from "../components/home/StartToday"
import {BrowseCatalog} from "../components/home/BrowseCatalog"

export function Home(){
    return (
        <>
        <Header></Header>
        <WelcomeSection></WelcomeSection>
        <StartToday></StartToday>
        <BrowseCatalog></BrowseCatalog>
        <Footer></Footer>
        </>
    );
}