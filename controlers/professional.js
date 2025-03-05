const Professional = require("../models/Professional.js");

const getProfessional = async (req, res) => {
  try {
    const professionalsData = await Professional.find();
    return res.status(200).json(professionalsData[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Get Professional Error" });
  }
};

module.exports = { getProfessional };
