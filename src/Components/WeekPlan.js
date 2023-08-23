import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WeekPlan = () => {
  return (
    <div className="plans" id="wallpaper">
      <Link to="CreatePlan">
        <button className="add-form">+</button>
      </Link>
    </div>
  );
};

export default WeekPlan;
