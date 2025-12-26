const mongoose = require("mongoose");
const connectionString = process.env.MONGO_DB_URL;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error(err);
  });
