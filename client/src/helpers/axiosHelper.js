import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:8000/api/v1";

const userEp = rootUrl + "/users";

const transactionEp = rootUrl + "/transactions";

export const postUser = async (usrObj) => {
  try {
    const { data } = await axios.post(userEp, usrObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (usrObj) => {
  try {
    const { data } = await axios.post(userEp + "/login", usrObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

// transaction api

export const postTransaction = async (transObj) => {
  try {
    const { data } = await axios.post(transactionEp, transObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
