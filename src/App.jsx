import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Categories from "./components/Categories/Categories";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import Technology from "./components/Categories/Tech/Technology";
import Programming from "./components/Categories/Program/Programming";
import Lifestyle from "./components/Categories/Lifestyle/Lifestyle";
import Design from "./components/Categories/Design/Design";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          }
        />

        {/* Nested post routes */}

        <Route path="categories/tech/:id" element={<Technology />} />
        <Route path="categories/programming/:id" element={<Programming />} />
        <Route path="categories/lifestyle/:id" element={<Lifestyle />} />
        <Route path="categories/design/:id" element={<Design />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;