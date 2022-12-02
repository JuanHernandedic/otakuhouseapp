const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usuariohSchema = new Schema(
  {
    name: {
      type: String,
    },
    contraseña: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  {
    collection: "usuariosOtakuhouse",
  }
);

module.exports = mongoose.model("usuariosOtakuhouse", usuariohSchema);
