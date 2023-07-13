import React from "react";
import aboutimage from "../images/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
  );
};

export default About;
