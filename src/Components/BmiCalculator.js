import { useState } from "react";
import { motion } from "framer-motion";

const BmiCalculator = () => {
  const [age, setAges] = useState(25);
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(90);
  const [bmi, setBmi] = useState("");
  const [activity, setActivity] = useState();
  const [bodyFat, setBodyFat] = useState(20);
  const [calories, setCalories] = useState("");

  const changeGender = (e) => {
    setGender(e.target.value);
  };

  const changeBmiForm = (e) => {
    setBmi(e.target.value);
  };

  const resetRadioState = () => {
    setGender("");
  };

  const changeActivity = (e) => {
    setActivity(e.target.value);
  };
  let BMR = "";

  const calculateCalorie = () => {
    if (bmi === "") {
      alert("Must chose actiivy and BMR formul");
    } else if (bmi === "0") {
      mifflin(age, gender, height, weight);
    } else if (bmi === "1") {
      harris(age, gender, height, weight);
    } else if (bmi === "2") {
      katch(bodyFat, weight);
    }
    let ret = parseFloat((BMR * activity).toFixed());
    setCalories(ret);
  };

  const mifflin = (age, gender, height, weight) => {
    if (gender === "male") {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    } else if (gender === "transgender") {
      BMR = 0;
    }
    return BMR;
  };

  const harris = (age, gender, height, weight) => {
    if (gender === "male") {
      BMR = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
    } else if (gender === "female") {
      BMR = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
    } else if (gender === "transgender") {
      BMR = 0;
    }
    return BMR;
  };

  const katch = (bodyFat, weight) => {
    BMR = 370 + 21.6 * (1 - bodyFat / 100) * weight;
    return BMR;
  };

  return (
    <motion.div
      className="Bmi"
      id="main"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Kcal Calculator</h1>
      <div>
        <div>
          <h2>Age:</h2>
          <input
            type="number"
            value={age}
            onChange={(e) => setAges(e.target.value)}
          />
          <label> Ages 15-80</label>
        </div>
        <div>
          <h2>Gender:</h2>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={changeGender}
          />
          <label>male</label>

          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={changeGender}
          />
          <label>female</label>

          <input
            type="radio"
            value="transgender"
            checked={gender === "transgender"}
            onChange={changeGender}
          />
          <label>Transgender</label>
        </div>
        <div>
          <h2>Height:</h2>
          <input
            type="number"
            value={height}
            placeholder="cm"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <h2>Weight:</h2>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="kg"
          />
        </div>
        <div>
          <h2>BodyFat:</h2>
          <input
            type="number"
            value={bodyFat}
            placeholder="%"
            onChange={(e) => setBodyFat(e.target.value)}
          />
        </div>

        <div>
          <h2>Activity:</h2>
          <select value={activity} onChange={changeActivity}>
            <option value="1">Basal Metabolic Rate (BMR)</option>
            <option value="1.2">Sedentary: little or no exercise</option>
            <option value="1.375">Light: exercise 1-3 times/week</option>
            <option selected="" value="1.465">
              Moderate: exercise 4-5 times/week
            </option>
            <option value="1.55">
              Active: daily exercise or intense exercise 3-4 times/week
            </option>
            <option value="1.725">
              Very Active: intense exercise 6-7 times/week
            </option>
            <option value="1.9">
              Extra Active: very intense exercise daily, or physical job
            </option>
          </select>
          <div>
            <h2>BMR estimation formula*</h2>
            <div>
              <input
                name="formula"
                checked={bmi === "0"}
                type="radio"
                value="0"
                onChange={changeBmiForm}
              />
              <label>Mifflin St Jeor</label>
            </div>
            <div>
              <input
                name="formula"
                checked={bmi === "1"}
                type="radio"
                value="1"
                onChange={changeBmiForm}
              />
              <label>Revised Harris-Benedict</label>
            </div>
            <div>
              <input
                name="formula"
                type="radio"
                value="2"
                checked={bmi === "2"}
                onChange={changeBmiForm}
              />
              <label>Katch-McArdle</label>
            </div>
          </div>
        </div>
        <div>
          <label style={{ color: "yellowgreen" }}>{calories}</label>
        </div>
      </div>
      <button onClick={calculateCalorie}>Calculate</button>
      <button onClick={resetRadioState}>Clear</button>
    </motion.div>
  );
};

export default BmiCalculator;
