import React from "react";
import Header from "./Header";
import Feature from "./Feature";
import Offer from "./Offer";
import About from "./About";
import Contact from "./Contact";
import BmiCalculator from "./BmiCalculator";
import PlatsCalculator from "./PlatsCalculator";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/header" element={<Header />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BmiCalculator" element={<BmiCalculator />} />
        <Route path="/PlatsCalculator" element={<PlatsCalculator />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
