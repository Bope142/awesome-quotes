import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "../assets/styles/main.style/main.scss";
import QuotePage from "../pages/quote";
import AboutPage from "../pages/about";
import CategoryPage from "../pages/category";
export default function MainView(props) {
  return (
    <div className="main__view__page">
      <Routes>
        <Route path="/:category" element={<QuotePage content={props} />} />
        <Route
          path="/category/:current_category"
          element={<CategoryPage content={props} />}
        />
        <Route path="/about" element={<AboutPage />} some-data="hhhh" />
      </Routes>
      <Outlet />
    </div>
  );
}
