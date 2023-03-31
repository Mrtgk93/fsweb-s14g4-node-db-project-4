const express = require("express");
const model = require("./tarif-model");
const { checkTarifId } = require("./tarif-middleware");
const router = express.Router();

router.get("/:id", checkTarifId, (req, res, next) => {
  try {
    res.json(req.tarif);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
