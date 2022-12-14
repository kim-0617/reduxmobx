const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const logIn = createAsyncThunk("user/logIn", async (data, thnukAPI) => {
  console.log(data);
  const result = await delay(500, {
    userId: 1,
    nickname: "zerocho",
  });
  return result;
});

module.exports = {
  logIn,
};
