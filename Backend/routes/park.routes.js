const express = require("express");
const router = express.Router();
const ParkController = require("../controllers/park.controller");

router
  .get("/parks", ParkController.getAllParks)
  .post("/parks", ParkController.createPark);

router
  .get("/parks/:id", ParkController.getPark)
  .patch("/parks/:id", ParkController.updatePark)
  .delete("/parks/:id", ParkController.deletePark);

module.exports = router;
