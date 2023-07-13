import React from "react";
import { motion } from "framer-motion";

const Offer = () => {
  return (
    <motion.div
      id="presentaion"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pr-heading">
        <h1>
          A BIG <span>OFFER</span>FOR THIS SUMMER XD
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          omnis tenetur nesciunt facilis, sed modi impedit qui illo
          necessitatibus aut ipsa ab accusamus voluptatum voluptatibus nemo
          veniam vitae maxime eum.
        </p>
        <div className="pr-btns">
          <a href="#" className="pr-btn">
            JOIN NOW
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Offer;
