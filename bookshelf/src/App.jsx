import { Route, Routes, Navigate } from "react-router-dom";
import { Footer } from "./components/commons/Footer";
import { Header } from "./components/commons/Header";
import { About } from "./pages/AboutPage";
import { Home } from "./pages/HomePage";
import { Login } from "./pages/LoginPage";
import { Register } from "./pages/RegisterPage";
import { UnderConstruction } from "./pages/UnderConstructionPage";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* Added navigate to always redirect to the home pages regardless if the URL has / or /home */}
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/underConstruction" element={<UnderConstruction />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
