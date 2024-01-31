import React from "react";
import "./style.scss";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import CategoryPage from "../../pages/category/CategoryPage";
import AboutPage from "../../pages/about/AboutPage";
import FavoriteQuotesPage from "../../pages/favoriteQoute/FavoriteQuotesPage";
function MainView() {
  return (
    <main className="main__view__page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/favorites" element={<FavoriteQuotesPage />} />
      </Routes>
      <Outlet />
    </main>
  );
}

export default MainView;
