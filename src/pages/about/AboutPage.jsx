import React from "react";
import "./style.scss";
import { ButtonLink } from "../../components/button/Button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
function AboutPage() {
  return (
    <main className="about__page">
      <blockquote>
        <p>
          Welcome to Awesome Quotes, a collection of amazing quotes that will
          inspire you. Feel free to share this app with your friends and family
          and don't forget to give a star on our github repo. Enjoy !
        </p>
      </blockquote>

      <div className="social__media">
        <ButtonLink
          href="https://github.com/Bope142/awesome-quotes.git"
          Icons={<FaGithub />}
          title="go to github repository"
        />
        <ButtonLink
          href="https://www.linkedin.com/in/norbert-yemuang-bope-69662318a"
          Icons={<FaLinkedin />}
          title="go to my linkedin page"
        />
        <ButtonLink
          href="https://web.facebook.com/profile.php?id=100063692963866"
          Icons={<FaFacebookSquare />}
          title="go to my facebook page"
        />
        <ButtonLink
          href="https://www.instagram.com/norbert_yemuang_bope_officiel/"
          Icons={<AiFillInstagram />}
          title="go to instagram profil"
        />
      </div>
      <p className="copy">&copy; 2024 Made with ❤️ By Norbert Yemuang Bope</p>
    </main>
  );
}

export default AboutPage;
