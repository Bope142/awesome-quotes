import React from "react";
import "../assets/styles/pages/about.page.scss";
import { ButtonIconsLink } from "../components/ButtonIcons";
import { ReactComponent as github_icons } from "../assets/icons/github.svg";
import { ReactComponent as facebook_icons } from "../assets/icons/facebook_f.svg";
import { ReactComponent as linkedin_icons } from "../assets/icons/linkedin.svg";
import { ReactComponent as instagram_icons } from "../assets/icons/instagram.svg";

const SocialMediaContainer = () => {
  const listLink = [
    {
      name: "Github",
      link: "https://github.com/",
      icon: github_icons,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/",
      icon: linkedin_icons,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/",
      icon: facebook_icons,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/",
      icon: instagram_icons,
    },
  ];
  return (
    <div className="container__social_media">
      {listLink.map((link) => (
        <ButtonIconsLink key={link.name} href={link.link} icons={link.icon} />
      ))}
    </div>
  );
};
export default function AboutPage(props) {
  return (
    <main className="container__page_app" id="about__page">
      <p className="about__overview">
        “Welcome to Awesome Quotes, a collection of amazing quotes that will
        inspire you. Feel free to share this app with your friends and family
        and don't forget to give a star on our github repo. Enjoy!”
      </p>
      <SocialMediaContainer />
      <p className="mention">
        Awesome Quotes -Copyright (c) 2023 Norbert Yemuang
      </p>
    </main>
  );
}
