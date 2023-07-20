import React from "react";
import "../assets/styles/pages/quote.page.scss";
import { ButtonIcons } from "../components/ButtonIcons";
import { ReactComponent as copy_icons } from "../assets/icons/copy.svg";
import { ReactComponent as downloads_icons } from "../assets/icons/downloads.svg";
import { ReactComponent as share_icons } from "../assets/icons/share.svg";
import { ReactComponent as next_icons } from "../assets/icons/next.svg";
import { ReactComponent as prev_icons } from "../assets/icons/previous.svg";
export default function QuotePage(props) {
  return (
    <main className="container__page_app" id="quote__page">
      <div className="quote__view">
        <h1 className="qoute__category">{props.content.category}</h1>
        <p className="qoute__text">
          What counts in Hollywood is box office. It doesn't really matter what
          people think of you as an actor because, as long as you have been in a
          movie that has made money, you will always get another job.
        </p>
        <h4 className="quote__author">-Diane Kruger</h4>
        <div className="controll__quotes">
          <ButtonIcons icons={prev_icons} />
          <ButtonIcons icons={next_icons} />
        </div>
      </div>
      <div className="tools__action">
        <ButtonIcons icons={copy_icons} />
        <ButtonIcons icons={downloads_icons} />
        <ButtonIcons icons={share_icons} />
      </div>
    </main>
  );
}
