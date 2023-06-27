import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const GymPlan = () => {
  const initialData = {
    exercise: {
      label: "exercise",
      value: "",
    },
    sets: {
      label: "sets",
      value: 0,
    },
    reps: {
      label: "reps",
      value: 0,
    },
    intensity: {
      label: "intensity",
      value: 0,
    },
    load: {
      label: "load",
      value: 0,
    },
    tempo: {
      label: "tempo",
      value: 0,
    },
    rest: {
      label: "rest",
      value: 0,
    },
  };

  // const [dates, setDates] = useState(initialData);
  const [dates, setDates] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue;
  });

  console.log(dates);

  const handleValue = (e) => {
    const { name, value } = e.target;

    setDates((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value: value },
    }));
  };

  const clearInputs = () => {
    setDates(initialData);
  };

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(dates));
  }, [dates]);

  console.log(dates);
  return (
    <div className="wrapper">
      <div>
        <label>Exercise:</label>
        <input
          name="exercise"
          placeholder="name"
          type="text"
          value={dates.exercise.value}
          onChange={handleValue}
        />
      </div>
      <div>
        <label>Sets:</label>
        <input
          name="sets"
          placeholder="0"
          type="number"
          value={dates.sets.value}
          onChange={handleValue}
        />
      </div>
      <div>
        <label>Reps:</label>
        <input
          name="reps"
          placeholder="0"
          type="number"
          value={dates.reps.value}
          onChange={handleValue}
        />
      </div>
      <div>
        <label>Intensity:</label>
        <input
          name="intensity"
          placeholder="%"
          type="text"
          value={dates.intensity.value}
          onChange={handleValue}
        />
      </div>
      <div>
        <label>Load:</label>
        <input
          name="load"
          placeholder="0"
          type="number"
          value={dates.load.value}
          onChange={handleValue}
        />
      </div>
      <div>
        <label>Tempo:</label>
        <input
          name="tempo"
          placeholder="0"
          type="number"
          value={dates.tempo.value}
          onChange={handleValue}
        />
      </div>
      <div>
        <label>Rest:</label>
        <input
          name="rest"
          placeholder="0"
          type="number"
          value={dates.rest.value}
          onChange={handleValue}
        />
      </div>
      <div></div>
      <input type="submit" value="submit"></input>
      <button onClick={clearInputs}>Clear</button>
    </div>
  );
};
