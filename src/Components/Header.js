import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      id="main"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="name">
        <h2>Never Give Up</h2>
        <h1>
          <span>Eat</span>YOUR STEROIDS.
        </h1>
        <p className="details">Build your muscles with me my friend</p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Join
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
