import { Route, Routes, Navigate } from "react-router-dom";
import { Footer } from "./components/commons/Footer";
import { Header } from "./components/commons/Header";
import { AboutPage } from "./pages/AboutPage";
import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

import { BookLandingPage } from "./pages/BookLandingPage";
import { useState } from "react";
import { ScrollToTop } from "./components/commons/ScrollToTop";
import "../src/assets/styles/common/loader.css";
import "../src/assets/styles/common/errorMessages.css";
import { PageNotFound } from "./pages/PageNotFound";
import "./assets/styles/app.css";
import { WishList } from "./pages/WishList";
import { MyLibrary } from "./pages/MyLibrary";

export function App() {
  //This state controls the filtered content on the Catalog Page
  const [selectedFilter, setSelectedFilter] = useState("/books");
  const [isUserLogged, setIsUserLogged] = useState(false);
  return (
    <>
      <ScrollToTop />
      <Header isUserLogged={isUserLogged} setIsUserLogged={setIsUserLogged} />
      <main>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          {/* Added navigate to always redirect to the home pages regardless if the URL has / or /home */}
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/login"
            element={
              <LoginPage
                isUserLogged={isUserLogged}
                setIsUserLogged={setIsUserLogged}
              />
            }
          />
          <Route
            path="/bookLanding/:id"
            //Pass the setSelectedFilter to the booklanding page in order to filter the catalog view when the user clicks on the genre link
            element={<BookLandingPage setSelectedFilter={setSelectedFilter} />}
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
          <Route path="/wishList" element={<WishList />} />
          <Route path="/myLibrary" element={<MyLibrary />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
