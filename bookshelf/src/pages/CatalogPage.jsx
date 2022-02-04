import { Title } from "../components/commons/Title";
import { Breadcrumb } from "../components/commons/Breadcrumb";
import { CategoryFilter } from "../components/catalog/CategoryFilter";
import "../assets/styles/catalog/catalog.css";
import { Link } from "react-router-dom";

// Title Variables
const catalogTitle = "Catalog";
const catalogSubtitle =
  "Our goal is to share our passion for books with everyone anywhere";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/catalog";
const secondLinkLabel = "Catalog";

export function CatalogPage() {
  return (
    <>
      <div className="catalog-title-wrapper tint">
        <Title title={catalogTitle} subtitle={catalogSubtitle}></Title>
        <Breadcrumb
          firstLinkTo={firstLinkTo}
          firstLinkLabel={firstLinkLabel}
          secondLinkTo={secondLinkTo}
          secondLinkLabel={secondLinkLabel}
        ></Breadcrumb>
        <CategoryFilter></CategoryFilter>
      </div>
      <section className="catalog-section">
        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage:
                "url(../../public/images/catalog/bookcover10.jpg)",
            }}
          ></div>
        </div>

        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage: "url(./assets/images/catalog/bookcover10.jpg)",
            }}
          >
            <div className="book-content roboto-white centered">
              <h3>Title</h3>
              <p className="book-title">The Wise Man&apos;s Fear</p>
              <h3>Description</h3>
              <p>
                In The Wise Man&apos;s Fear, Kvothe searches for answers,
                attempting to uncover the truth about the mysterious Amyr, the
                Chandrian, and the...
              </p>
              <h3>Author</h3>
              <p className="book-author">Patrick Rothfuss</p>
              <Link
                target="_self"
                to="bookLanding.html"
                className="roboto-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage: "url(./assets/images/catalog/bookcover10.jpg)",
            }}
          >
            <div className="book-content roboto-white centered">
              <h3>Title</h3>
              <p className="book-title">The Return of the King</p>
              <h3>Description</h3>
              <p>
                Gandalf brings Pippin with him, who enters the service of the
                steward. Aragorn, by his courage and leadership, proves himself
                a worthy ruler...
              </p>
              <h3>Author</h3>
              <p className="book-author">J.R.R Tolkien</p>
              <Link
                target="_self"
                to="bookLanding.html"
                className="roboto-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage: "url(./assets/images/catalog/bookcover10.jpg)",
            }}
          >
            <div className="book-content roboto-white centered">
              <h3>Title</h3>
              <p className="book-title">A Quest of Heroes</p>
              <h3>Description</h3>
              <p>
                A Quest for Heroes revolves around the epic coming of age story
                of one special boy, a 14 year old from a small village on the
                outskirts of the...
              </p>
              <h3>Author</h3>
              <p className="book-author">Morgan Rice</p>
              <Link
                target="_self"
                to="bookLanding.html"
                className="roboto-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage: "url(./assets/images/catalog/bookcover10.jpg)",
            }}
          >
            <div className="book-content roboto-white centered">
              <h3>Title</h3>
              <p className="book-title">It</p>
              <h3>Description</h3>
              <p>
                The story follows the experiences of seven children as they are
                terrorized by an evil entity that exploits the fears of its
                victims to disguise...
              </p>
              <h3>Author</h3>
              <p className="book-author">Stephen King</p>
              <Link
                target="_self"
                to="bookLanding.html"
                className="roboto-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage: "url(./assets/images/catalog/bookcover10.jpg)",
            }}
          >
            <div className="book-content roboto-white centered">
              <h3>Title</h3>
              <p className="book-title">The Little Prince</p>
              <h3>Description</h3>
              <p>
                The story follows a young prince who visits various planets in
                space, including Earth, and addresses themes of loneliness,
                friendship, love, and...
              </p>
              <h3>Author</h3>
              <p className="book-author">Morgan Rice</p>
              <Link
                target="_self"
                to="bookLanding.html"
                className="roboto-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage: "url(./assets/images/catalog/bookcover10.jpg)",
            }}
          >
            <div className="book-content roboto-white centered">
              <h3>Title</h3>

              <p className="book-title">range of ghosts</p>
              <h3>Description</h3>
              <p>
                A powerful new fantasy from Hugo award–winning author Elizabeth
                Bear, Range of Ghosts creates a world both deep and broad, where
                a sorcerer-prince...
              </p>
              <h3>Author</h3>
              <p className="book-author">elizabeth bear</p>
              <Link
                target="_self"
                to="bookLanding.html"
                className="roboto-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage: "url(./assets/images/catalog/bookcover10.jpg)",
            }}
          >
            <div className="book-content roboto-white centered">
              <h3>Title</h3>
              <p className="book-title">Temeraire</p>
              <h3>Description</h3>
              <p>
                The novels follow the adventures of Captain William Laurence and
                his dragon, the eponymous Temeraire, and reimagine events of the
                Napoleonic Wars with...
              </p>
              <h3>Author</h3>
              <p className="book-author">Naomi Novik</p>
              <Link
                target="_self"
                to="bookLanding.html"
                className="roboto-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage: "url(./assets/images/catalog/bookcover10.jpg)",
            }}
          >
            <div className="book-content roboto-white centered">
              <h3>Title</h3>
              <p className="book-title">Nevermore</p>
              <h3>Description</h3>
              <p>
                As her world begins to unravel around her, Isobel discovers that
                dreams, like words, hold more power than she ever imagined, and
                that the most...
              </p>
              <h3>Author</h3>
              <p className="book-author">Sam Shore</p>
              <Link
                target="_self"
                to="bookLanding.html"
                className="roboto-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage: "url(./assets/images/catalog/bookcover10.jpg)",
            }}
          >
            <div className="book-content roboto-white centered">
              <h3>Title</h3>
              <p className="book-title">Unspoken</p>
              <h3>Description</h3>
              <p>
                A young girl's courage is tested in this haunting, wordless
                story. When a farm girl discovers a runaway slave hiding in the
                barn...
              </p>
              <h3>Author</h3>
              <p className="book-author">Celia McMahon</p>
              <Link
                target="_self"
                to="bookLanding.html"
                className="roboto-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage: "url(./assets/images/catalog/bookcover10.jpg)",
            }}
          >
            <div className="book-content roboto-white centered">
              <h3>Title</h3>
              <p className="book-title">The white raven</p>
              <h3>Description</h3>
              <p>
                Sprinkled in is jealousy, revenge, drinking, a little Halloween
                fun, and some fairies you don't want to get on the wrong side
                of.
              </p>
              <h3>Author</h3>
              <p className="book-author">Carrie D. Miller</p>
              <Link
                target="_self"
                to="bookLanding.html"
                className="roboto-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        <div className="book-wrapper grow">
          <div
            className="book grow"
            style={{
              backgroundImage: "url(./assets/images/catalog/bookcover10.jpg)",
            }}
          >
            <div className="book-content roboto-white centered">
              <h3>Title</h3>
              <p className="book-title">The winter king</p>
              <h3>Description</h3>
              <p>
                Uther, the High King, has died, leaving the infant Mordred as
                his only heir. His uncle, the loyal and gifted warlord Arthur,
                now....
              </p>
              <h3>Author</h3>
              <p className="book-author">Christie Cohen</p>
              <Link
                target="_self"
                to="bookLanding.html"
                className="roboto-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
