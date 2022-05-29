const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CON_LOCAL)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    throw err;
  });
