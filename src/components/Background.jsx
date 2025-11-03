import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import video1 from "../assets/video1.mp4";
import "./background.css";

function Background({ playvideo, herocount }) {
  if (playvideo) {
    return (
      <video className="Background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (herocount == 1) {

    return <img src={image1} className="Background fade-in" />;

  } else if (herocount == 2) {

    return <img src={image2} className="Background fade-in" />;

  } else if (herocount == 3) {

    return <img src={image3} className="Background fade-in" />;
    
  }
}

export default Background;
