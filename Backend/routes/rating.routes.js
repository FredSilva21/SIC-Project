const express = require("express");
const router = express.Router();
const RatingController = require("../controllers/rating.controller");
const { verifyUser } = require("../middleware/jwt");

router
  .get("/parks/:parkId/ratings", verifyUser, RatingController.getAllRatings)
  .post("/parks/:parkId/ratings", verifyUser, RatingController.createRating);

router
  .get("/parks/:parkId/ratings/:ratingId", verifyUser, RatingController.getRating)
  .patch("/parks/:parkId/ratings/:ratingId", verifyUser, RatingController.updateRating)
  .delete("/parks/:parkId/ratings/:ratingId", verifyUser, RatingController.deleteRating);

module.exports = router;
