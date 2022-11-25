const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let registerSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    clave: {
      type: String,
    },
  },
  {
    collection: "registro",
  }
);
module.exports = mongoose.model("registro", registerSchema);
