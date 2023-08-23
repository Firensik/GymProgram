import React from "react";
import Featurebox from "./Featurebox";
import Fimage1 from "../images/Fimage1.png";
import Fimage2 from "../images/Fimage2.png";
import Fimage3 from "../images/Fimage3.png";
import Fimage4 from "../images/Fimage4.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <motion.div
      id="features"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Features</h1>
      <div className="a-container">
        <Link to="/feature/BmiCalculator">
          <Featurebox image={Fimage1} title="BMI Calclculator" />
        </Link>
        <Link to="/Feature/PlatsCalculator">
          <Featurebox image={Fimage2} title="Plates Calculator" />
        </Link>

        <Link to="/Feature/WeekPlan">
          <Featurebox image={Fimage3} title="Week Plan" />
        </Link>

        <Featurebox image={Fimage4} title="Cardio Exercise" />
      </div>
    </motion.div>
  );
};

export default Feature;
