import React from "react";
import aboutimage from "../images/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LERN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          libero magnam, ratione enim natus quia provident delectus qui suscipit
          vitae iusto commodi impedit alias magni neque? Excepturi voluptate
          officia illo.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default About;
