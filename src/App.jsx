import { Route, Routes, Navigate } from "react-router-dom";
import { Footer } from "./components/commons/Footer";
import { Header } from "./components/commons/Header";
import { AboutPage } from "./pages/AboutPage";
import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ComingSoon } from "./components/commons/ComingSoon";
import { BookLandingPage } from "./pages/BookLandingPage";
import { useState, useEffect } from "react";
import { ScrollToTop } from "./components/commons/ScrollToTop";
import "../src/assets/styles/common/loader.css";
import "../src/assets/styles/common/errorMessages.css";
import { PageNotFound } from "./pages/PageNotFound";
import "./assets/styles/app.css";
import { WishList } from "./pages/WishList";
import { MyLibrary } from "./pages/MyLibrary";
import { Error } from "./pages/ErrorPage";
import { SearchResults } from "./pages/SearchResults";

export function App() {
  //This state controls the filtered content on the Catalog Page
  const [selectedFilter, setSelectedFilter] = useState("/books");
  const [isUserLogged, setIsUserLogged] = useState(false);

  //Search input state, this will be used to pass the search text input to the Search result page
  const [inputSearch, setInputSearch] = useState("");

  let token = localStorage.getItem("token");
  useEffect(() => {
    localStorage.getItem("token") != null
      ? setIsUserLogged(true)
      : setIsUserLogged(false);
  }, [token]);

  return (
    <>
      <ScrollToTop />
      <Header
        isUserLogged={isUserLogged}
        setIsUserLogged={setIsUserLogged}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      />
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

          <Route
            path="/register"
            element={
              <RegisterPage
                isUserLogged={isUserLogged}
                setIsUserLogged={setIsUserLogged}
              />
            }
          />
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
          <Route
            path="/wishList"
            element={
              <WishList
                /* Pass the parameters to catalog in order to filter the view */
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
            }
          />
          <Route
            path="/myLibrary"
            element={
              <MyLibrary
                /* Pass the parameters to catalog in order to filter the view */
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
            }
          />
          <Route
            path="/searchResults"
            element={<SearchResults inputSearch={inputSearch} />}
          ></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/comingSoon" element={<ComingSoon />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
