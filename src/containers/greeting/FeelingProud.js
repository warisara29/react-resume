import React from "react";
import "./FeelingProud.css";
import profileIMG from "./blogging.png"

function FeelingProud(props) {
  const theme = props.theme;
  return (
    <section className="profile-image-container">
      <img id="profile-image" src={ profileIMG } alt="Me"></img>
    </section>
  );
}

export default FeelingProud;
