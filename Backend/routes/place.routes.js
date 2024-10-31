const express = require("express");
const router = express.Router();
const PlaceController = require("../controllers/place.controller");
const { verifyUser } = require("../middleware/jwt");

router
  .get("/parks/:parkId/places", verifyUser, PlaceController.getAllPlaces)
  .post("/parks/:parkId/places", verifyUser, PlaceController.createPlace);

router
  .get("/parks/:parkId/places/:placeId", verifyUser, PlaceController.getPlace)
  .patch("/parks/:parkId/places/:placeId", verifyUser, PlaceController.updatePlace);
module.exports = router;
