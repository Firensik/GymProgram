import { useFavicon } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const GymPlan = () => {
  const initialData = {
    id: 0,
    exercise: "",
    sets: "",
    reps: "",
    intensity: "",
    load: "",
    tempo: "",
    rest: "",
  };

  const [dates, setDates] = useState(() => {
    const storedDates = localStorage.getItem("inputs");
    return storedDates ? JSON.parse(storedDates) : [initialData];
  });

  const addInput = () => {
    const newId = Math.random();
    setDates((prevState) => [...prevState, { ...initialData, id: newId }]);
  };

  const remove = (id) => {
    setDates((prevState) => prevState.filter((input) => input.id !== id));
    localStorage.clear("inputs");
  };

  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(dates));
  }, [dates]);

  const handleChange = (id, e) => {
    const { name, value } = e.target;

    setDates((prevState) => {
      const updatedDates = prevState.map((input) => {
        if (input.id === id) {
          return { ...input, [name]: value };
        }
        return input;
      });
      return updatedDates;
    });
  };

  return (
    <div className="wrapper">
      <form>
        {dates.map((input, index) => {
          return (
            <div key={input.id}>
              <input
                name="exercise"
                placeholder="exercise name"
                type="text"
                value={input.exercise}
                onChange={(e) => handleChange(input.id, e)}
              />

              <input
                name="sets"
                placeholder="sets"
                type="number"
                value={input.sets}
                onChange={(e) => handleChange(input.id, e)}
              />

              <input
                name="reps"
                placeholder="reps"
                type="number"
                value={input.reps}
                onChange={(e) => handleChange(input.id, e)}
              />

              <input
                name="intensity"
                placeholder="intensity"
                type="text"
                value={input.intensity}
                onChange={(e) => handleChange(input.id, e)}
              />

              <input
                name="load"
                placeholder="load"
                type="number"
                value={input.load}
                onChange={(e) => handleChange(input.id, e)}
              />

              <input
                name="tempo"
                placeholder="tempo"
                type="number"
                value={input.tempo}
                onChange={(e) => handleChange(input.id, e)}
              />

              <input
                name="rest"
                placeholder="rest"
                type="number"
                value={input.rest}
                onChange={(e) => handleChange(input.id, e)}
              />
              <button
                onClick={() => {
                  console.log(index);
                  remove(input.id);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </form>
      <button onClick={addInput}>Add More..</button>
    </div>
  );
};
