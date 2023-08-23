import React, { useEffect, useState } from "react";
import gymExercisesList from "../Exercises/Exercise.json";

const sleep = async (time) => new Promise((res) => setTimeout(res, time));
const randomInt = () => Math.floor(Math.random() * 10);

const Axios = {
  get: async (gymExercisesList) => {
    await sleep(500);
    return new Promise(async (res, rej) => {
      const randomNumber = randomInt();
      if (randomNumber > 8) {
        return rej({ status: 500, message: `Api is down` });
      }
      if (randomNumber < 4) {
        await sleep(2000);
      }

      return res(gymExercisesList);
    });
  },
};

const CreatePlan = () => {
  return <div className="create-plan-form">{Axios}</div>;
};

export default CreatePlan;
