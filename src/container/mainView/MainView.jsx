import React from "react";
import "./style.scss";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import CategoryPage from "../../pages/category/CategoryPage";
import AboutPage from "../../pages/about/AboutPage";

function MainView() {
  return (
    <main className="main__view__page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Outlet />
    </main>
  );
}

export default MainView;
