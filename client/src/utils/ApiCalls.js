import axios from "axios";
export const getInfo = async function() {
  try {
    let players = await axios.get("/api/game");
    return players;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async function(name) {
  try {
    let newPlayer = await axios.post("/api/auth/signup", name);
    return newPlayer;
  } catch (error) {
    console.error(error);
  }
};
export const loginUser = async function(name) {
  try {
    let player = await axios.post("/api/auth/signin", name);
    return player;
  } catch (error) {
    console.error(error);
  }
};

export const getResults = async function(id) {
  try {
    let results = await axios.get(`/api/game/${id}`);
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const postResults = async function(url, shuffleCount, time) {
  try {
    let newResult = await axios.post(url, {
      shuffles: shuffleCount,
      time: time
    });
    return newResult;
  } catch (err) {
    console.error(err);
  }
};
