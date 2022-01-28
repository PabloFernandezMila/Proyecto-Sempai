import "../../assets/styles/home/startToday.css"
export function StartToday(){
    return(
    
    <section id="section2">

    <div id="section2-content" class="tint">
        <div class="centered">
            <h1 class="roboto-white">
                Start today</h1>
            <p class="roboto-white">
                Browse our wide catalog and select the titles that you like.</p>
            <p class="roboto-white">
                Immerse in your reading whenever you want, carry all the books with you.
            </p>
            <form action="register.html">
                <input type="submit" id="section2-button" class="section-button roboto-white" value="Create an account" />
            </form>
        </div>
    </div>
    <div class="arrow-container">
        <a class="bounce down-arrow" href="#section3"> </a>
    </div>
</section>);
}