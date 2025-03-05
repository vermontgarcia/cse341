/**
 * Professional Model
 */

const mongoose = require("mongoose");

const ProfessionalSchema = new mongoose.Schema(
  {
    professionalName: {
      type: String,
    },
    nameLink: {
      firstName: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    base64Image: {
      type: String,
    },
    firstName: {
      type: String,
    },
    primaryDescription: {
      type: String,
    },
    workDescription1: {
      type: String,
    },
    workDescription2: {
      type: String,
    },
    linkTitleText: {
      type: String,
    },
    linkedInLink: {
      link: {
        type: String,
      },
      text: {
        type: String,
      },
    },
    githubLink: {
      link: {
        type: String,
      },
      text: {
        type: String,
      },
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Professional", ProfessionalSchema);
