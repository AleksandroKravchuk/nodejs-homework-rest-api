const { Schema, model } = require("mongoose");
// const Joi = require("joi");
// const { handleSaveErrors } = require("../helpers");
const Role = new Schema(
  {
    value: { type: String, enum: ["USER", "ADMIN"], default: "User" },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("Role", Role);
