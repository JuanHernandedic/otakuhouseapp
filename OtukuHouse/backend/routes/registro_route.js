let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Modelo Estudiante
let usuariohSchema = require("../models/registro");

// CREAR Estudiante
router.route("/crearusuario").post((req, res, next) => {
  usuariohSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Estudiante
router.route("/").get((req, res, next) => {
  usuariohSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener un Estudiante
router.route("/edit-student/:id").get((req, res, next) => {
  usuariohSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Actualizar Estudiante
router.route("/update-student/:id").put((req, res, next) => {
  usuariohSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Student updated successfully !");
      }
    }
  );
});

// BORRAR Estudiante
router.route("/delete-student/:id").delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
