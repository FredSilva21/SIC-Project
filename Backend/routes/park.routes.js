const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer')
const ParkController = require("../controllers/park.controller");
const { verifyUser } = require("../middleware/jwt");

router
  .get("/parks",verifyUser, ParkController.getAllParks)
  .post("/parks",verifyUser,upload.single('file'), ParkController.createPark);

router
  .get("/parks/:id",verifyUser, ParkController.getPark)
  .patch("/parks/:id",verifyUser, ParkController.updatePark)
  .delete("/parks/:id",verifyUser, ParkController.deletePark);

module.exports = router;
