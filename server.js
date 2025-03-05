const express = require("express");
const dotenv = require("dotenv");
const professionalRouter = require("./routes/professional");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();
const PORT = process.env.PORT;
const dbURI = process.env.DB_URL;
const dbName = process.env.DB_NAME;

mongoose
  .connect(dbURI, { dbName })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((error) => {
    console.error("DB connection error", error);
  });

// // Code to create Professional in Database. Excecutted only once

// const { default: Professional } = require("./models/Professional");
// const profesionalJson = require("./professional.json");
// const ProfessionalModel = mongoose.model("Professional", Professional);
// const professionalData = new ProfessionalModel(profesionalJson);
// professionalData
//   .save()
//   .then((doc) => {
//     console.log("Professional created:", doc);
//   })
//   .catch((error) => {
//     console.error("Error creating professional document:", error);
//   });

const app = express();

app.use(cors());

app.use("/professional", professionalRouter);

app.listen(PORT, () => {
  console.log(`Web Server listening at port ${PORT}`);
});
