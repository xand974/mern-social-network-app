const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CON_STRING)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });
