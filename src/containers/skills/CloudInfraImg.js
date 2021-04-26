import React from "react";
import Infaimg from "./hiring-people.png";

export default function CloudInfraImg(props) {
  const theme = props.theme;
  return (
    <section className="infa-image-container">
      <img id="Infa-img" src={ Infaimg } alt="my skills"></img>
    </section>
  );
}
