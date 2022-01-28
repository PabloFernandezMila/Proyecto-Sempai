import "../../assets/styles/home/welcomeSection.css"

export function WelcomeSection(){

    return(        
    <section id="section1" class="tint">
        <div id="section1-wrapper">
            <div id="column1">
                <div class="centered">
                    <h1 class="roboto-white">
                        Welcome to Bookshelf</h1>
                    <h2 class="roboto-white">
                        Take your books anywhere and anytime.</h2>
                    <h2 class="roboto-white">
                        Pick yours from our wide catalog.</h2>
                </div>
            </div>
            <div id="column2">
                <div id="column2-image" class="centered-vertically"></div>
            </div>
            <div class=" arrow-container ">
                <a class="bounce down-arrow" href="#section2"> </a>
            </div>
        </div>
    </section>);

        } 