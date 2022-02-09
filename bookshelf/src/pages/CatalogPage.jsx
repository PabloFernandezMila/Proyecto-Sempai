import { Title } from "../components/commons/Title";
import { Breadcrumb } from "../components/commons/Breadcrumb";
import { CategoryFilter } from "../components/catalog/CategoryFilter";
import "../assets/styles/catalog/catalog.css";
import { BooksList } from "../components/catalog/BooksList";
import { useState } from "react";

// Title Variables
const catalogTitle = "Catalog";
const catalogSubtitle = "Browse our catalog and find what you need!";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/catalog";
const secondLinkLabel = "Catalog";

export function CatalogPage(props) {
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

        <CategoryFilter
          setSelectedFilter={props.setSelectedFilter}
          selectedFilter={props.selectedFilter}
        ></CategoryFilter>
      </div>
      <BooksList selectedFilter={props.selectedFilter}></BooksList>
    </div>
  );
}
