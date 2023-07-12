import React from "react";
import Featurebox from "./Featurebox";
import Fimage1 from "../images/Fimage1.png";
import Fimage2 from "../images/Fimage2.png";
import Fimage3 from "../images/Fimage3.png";
import Fimage4 from "../images/Fimage4.png";

const Feature = () => {
  return (
    <div id="features">
      <h1>Features</h1>
      <div className="a-container">
        <Featurebox image={Fimage1} title="WeightLifting" />
        <Featurebox image={Fimage2} title="Specific Muscle" />
        <Featurebox image={Fimage3} title="Flex Yor Muscle" />
        <Featurebox image={Fimage4} title="Cardio Exercise" />
      </div>
    </div>
  );
};

export default Feature;
