import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./Movie/Components/Navbar/Navbar";
import Footer from "./Movie/Components/Footer/Footer";
import CastDetails from "./Movie/Pages/Cast/CastDetails";
import MoviePage from "./Movie/Pages/MoviePage/MoviePage";
import Home from "./Movie/Pages/Home/Home";
import LoginPage from "./Movie/Pages/Login/Login"; // Import LoginPage
import About from "./Movie/Pages/About/About"; // Import About Page
import Contact from "./Movie/Pages/Contact/Contact"; // Import Contact Page
import { DarkModeProvider } from "../src/context/DarkModeContext";

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  return (
    <DarkModeProvider>
      <BrowserRouter>
        {/* Wrapping the entire app in BrowserRouter to provide Router context */}
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />

          {/* Protected Routes */}
          <Route
            path="/*"
            element={
              isLoggedIn ? (
                <>
                  <Navbar />
                  <div className="main-content">
                    <Routes>
                      <Route path="/" element={<ProtectedRoute element={<Home />} />} />
                      <Route path="/movie/:id" element={<ProtectedRoute element={<MoviePage />} />} />
                      <Route path="/cast/:castId" element={<ProtectedRoute element={<CastDetails />} />} />
                      <Route path="/about" element={<ProtectedRoute element={<About />} />} />
                      <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
                    </Routes>
                  </div>
                  {/* Using the location hook inside Router to check the current pathname */}
                  <LocationBasedFooter />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
};

// LocationBasedFooter component that uses `useLocation` hook inside the Router context
const LocationBasedFooter = () => {
  const location = useLocation(); // Now works because it's inside the Router context
  
  return (
    // Always show Footer on Home, About, and Contact pages
    (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact") && <Footer />
  );
};

export default App;
