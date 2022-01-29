import "../../assets/styles/home/startToday.css"
export function StartToday(){
    return(
    
    <section id="section2">

    <div id="section2-content" className="tint">
        <div className="centered">
            <h1 className="roboto-white">
                Start today</h1>
            <p className="roboto-white">
                Browse our wide catalog and select the titles that you like.</p>
            <p className="roboto-white">
                Immerse in your reading whenever you want, carry all the books with you.
            </p>
            <form action="register.html">
                <input type="submit" id="section2-button" className="section-button roboto-white" value="Create an account" />
            </form>
        </div>
    </div>
    <div className="arrow-container">
        <a className="bounce down-arrow" href="#section3"> </a>
    </div>
</section>);
}