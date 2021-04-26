import React from "react";
import Skills from "./analyse.png";

export default function FullStackImg(props) {
  const theme = props.theme;
  return (
    <section className="skills-image-container">
      <img id="skills-img" src={ Skills } alt="my skills"></img>
    </section>
  );
}
