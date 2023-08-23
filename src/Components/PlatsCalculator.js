import { useState } from "react";
import { motion } from "framer-motion";

const PlatsCalculator = () => {
  const exportWeight = {
    25: {
      label: "25kg",
      quantity: 0,
    },
    20: {
      label: "20kg",
      quantity: 0,
    },
    15: {
      label: "15kg",
      quantity: 0,
    },
    10: {
      label: "10kg",
      quantity: 0,
    },
    5: {
      label: "5kg",
      quantity: 0,
    },
    2.5: {
      label: "2.5kg",
      quantity: 0,
    },
    1.25: {
      label: "1.25kg",
      quantity: 0,
    },
  };

  const result = {
    25: {
      plates: 0,
    },
    20: {
      plates: 0,
    },
    15: {
      plates: 0,
    },
    10: {
      plates: 0,
    },
    5: {
      plates: 0,
    },
    2.5: {
      plates: 0,
    },
    1.25: {
      plates: 0,
    },
  };

  const [weight, setWeight] = useState(exportWeight);
  const [results, setResults] = useState(result);
  const [total, setTotal] = useState(0);
  const [showTotal, setShowTotal] = useState();

  const clearInput = () => {
    setWeight(exportWeight);
    setTotal(0);
  };

  const handleQuantity = (e) => {
    const { name, value } = e.target;

    setWeight((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], quantity: +value },
    }));
  };
  let newTotal = total;

  const mathematic = (e) => {
    e.preventDefault();
    const calculatorWeight = (plateWeight, quantity, left) => {
      const plateAmount = 2;
      const actualWeight = plateWeight * plateAmount;

      if (newTotal >= actualWeight && weight[plateWeight].quantity > quantity) {
        results[plateWeight].plates = results[plateWeight].plates + plateAmount;
        newTotal = left - actualWeight;

        setTotal(newTotal);
        setShowTotal(total);

        return calculatorWeight(plateWeight, quantity + plateAmount, newTotal);
      }

      return;
    };
    for (let [key, value] of Object.entries(weight)) {
      if (newTotal === 0) {
        continue;
      }
      calculatorWeight(key, 0, newTotal);
    }
  };

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="App-calculator"
    >
      <form className="form">
        <h1 className="Name">Gym Calculator</h1>
        <h2>To lift {showTotal}, you will need:</h2>

        <div className="score">
          {Object.entries(results).map(([weight, value]) => {
            return (
              <div key={weight}>
                <p>
                  {weight}kg - Plates: <span>{value.plates}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="Input-weight">
          <h2>Provide the number of plates in the gym:</h2>
          <label>Weight:</label>
          <input
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            type="number"
          />
          <label>Amount:</label>
          <div className="inputs-value">
            <label>25</label>
            <input
              name="25"
              value={weight[25].quantity}
              onChange={handleQuantity}
              type="number"
            />
            <label>20</label>
            <input
              name="20"
              value={weight[20].quantity}
              onChange={handleQuantity}
              type="number"
            />
            <label>15</label>
            <input
              name="15"
              value={weight[15].quantity}
              onChange={handleQuantity}
              type="number"
            />
            <label>10</label>
            <input
              name="10"
              value={weight[10].quantity}
              onChange={handleQuantity}
              type="number"
            />
            <label>5</label>
            <input
              name="5"
              value={weight[5].quantity}
              onChange={handleQuantity}
              type="number"
            />
            <label>2.5</label>
            <input
              name="2.5"
              value={weight[2.5].quantity}
              onChange={handleQuantity}
              type="number"
            />
            <label>1.25</label>
            <input
              name="1.25"
              value={weight[1.25].quantity}
              onChange={handleQuantity}
              type="number"
            />
          </div>
        </div>
        <button className="button-cal" onClick={mathematic}>
          Calculate
        </button>
        <button className="button-clear" onClick={clearInput}>
          Clear
        </button>
      </form>
    </motion.div>
  );
};

export default PlatsCalculator;
