import { Route, Routes, Navigate } from "react-router-dom";
import { Footer } from "./components/commons/Footer";
import { Header } from "./components/commons/Header";
import { AboutPage } from "./pages/AboutPage";
import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { UnderConstructionPage } from "./pages/UnderConstructionPage";
import { BookLandingPage } from "./pages/BookLandingPage";
import { useState } from "react";
import { ScrollToTop } from "./components/commons/ScrollToTop";
import "../src/assets/styles/common/loader.css";
import { PageNotFound } from "./pages/PageNotFound";

export function App() {
  //This state controls the filtered content on the Catalog Page
  const [selectedFilter, setSelectedFilter] = useState("/books");

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          {/* Added navigate to always redirect to the home pages regardless if the URL has / or /home */}
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/bookLanding/:id"
            //Pass the setSelectedFilter to the booklanding page in order to filter the catalog view when the user clicks on the genre link
            element={<BookLandingPage setSelectedFilter={setSelectedFilter} />}
          />

          <Route
            path="/underConstruction"
            element={<UnderConstructionPage />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/catalog"
            element={
              <CatalogPage
                /* Pass the parameters to catalog in order to filter the view */
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
            }
          />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
