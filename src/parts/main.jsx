import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "../assets/styles/main.style/main.scss";
import QuotePage from "../pages/quote";
import AboutPage from "../pages/about";
import CategoryPage from "../pages/category";
export default function MainView() {
  return (
    <div className="main__view__page">
      <Routes>
        <Route path="/" element={<QuotePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Outlet />
    </div>
  );
}
