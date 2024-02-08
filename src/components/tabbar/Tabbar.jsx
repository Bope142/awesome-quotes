import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TiInfoLarge } from "react-icons/ti";
const linkNavTabbar = [
  {
    label: "Quotes",
    icons: <FaQuoteLeft className="icons-items-tabbar" />,
    path: "/",
  },
  {
    label: "Category",
    icons: <BiSolidCategoryAlt className="icons-items-tabbar" />,
    path: "/category",
  },
  {
    label: "About",
    icons: <TiInfoLarge className="icons-items-tabbar" />,
    path: "/about",
  },
];
const TabItem = ({ Icons, label, path }) => {
  return (
    <NavLink to={path} className="tabbar__item">
      <div className="items__icons">{Icons}</div>
      <p className="items__title">{label}</p>
    </NavLink>
  );
};
function Tabbar() {
  return (
    <div className="tabbar-menu">
      {linkNavTabbar.map((link) => (
        <TabItem
          key={link.path}
          Icons={link.icons}
          label={link.label}
          path={link.path}
        />
      ))}
    </div>
  );
}

export default Tabbar;
