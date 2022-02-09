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

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Function added to scroll to top when click on Related books
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
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
          <Route path="/bookLanding/:id" element={<BookLandingPage />} />

          <Route
            path="/underConstruction"
            element={<UnderConstructionPage />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
