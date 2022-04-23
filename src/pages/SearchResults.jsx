import { Title } from "../components/commons/Title";
import { Breadcrumb } from "../components/commons/Breadcrumb";
import "../assets/styles/catalog/catalog.css";
import { SearchList } from "../components/search/SearchList";

// Title Variables
const catalogTitle = "Search";
const catalogSubtitle = "Look for books using title, author or description";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/catalog";
const secondLinkLabel = "Catalog";

export function SearchResults(props) {
  return (
    <div className="catalog-wrapper">
      <div className="catalog-title-wrapper tint">
        <Title title={catalogTitle} subtitle={catalogSubtitle}></Title>
        <Breadcrumb
          firstLinkTo={firstLinkTo}
          firstLinkLabel={firstLinkLabel}
          secondLinkTo={secondLinkTo}
          secondLinkLabel={secondLinkLabel}
        ></Breadcrumb>
      </div>
      <SearchList inputSearch={props.inputSearch}></SearchList>
    </div>
  );
}
