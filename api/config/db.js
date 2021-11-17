const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CON_STRING_V2)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });
