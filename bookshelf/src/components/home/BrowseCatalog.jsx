
import "../../assets/styles/home/browseCatalog.css"
export function BrowseCatalog(){
    return (
      <section id="section3" class="tint">
    <div id="section3-content" class="tint">
        <div id="section3-content-text" class="section3-position centered">
            <h1 class="roboto-white">
                Over 1000+ titles available!</h1>
            <p class="roboto-white">
                Don&apos;t know what to read? Bored of finding the same books everywhere?</p>
            <p class="roboto-white">
                On our site you will find more than 1000 titles, some indie writers, unprinted titles, old and new editions of classic books and much more.
            </p>
            <form action="catalog.html">
                <input type="submit" id="section3-button" class="section-button roboto-white section3-position" value="Browse our Catalog" />
            </form>
        </div>
    </div>
</section>  
    );
}