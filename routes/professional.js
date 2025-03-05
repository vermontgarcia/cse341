const express = require("express");
const { getProfessional } = require("../controlers/professional");

const professionalRouter = express.Router();

professionalRouter.get("/", getProfessional);

module.exports = professionalRouter;
