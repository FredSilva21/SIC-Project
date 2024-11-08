// const { Park, User, ParkRating } = require("../models/index");

// exports.getAllRatings = async (req, res) => {
//   const { parkId } = req.params;
//   try {
//     const park = await Park.findOne({ where: { id_park: parkId } });

//     if (!park) {
//       return res.status(404).json({ error: "Park not found" });
//     }

//     const ratings = await ParkRating.findAll({
//       where: { id_park: parkId },
//       include: [
//         {
//           model: User,
//           attributes: ["id_user", "name"],
//         },
//       ],
//     });
//     return res
//       .status(200)
//       .json({ success: "Retrieved all ratings", ratings: ratings });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Something went wrong. Plese try again later",
//       details: error,
//     });
//   }
// };

// exports.createRating = async (req, res) => {
//   const { rating } = req.body;

//   const id_park = req.params.parkId;
//   const id_user = res.locals.userId;

//   try {
//     if (!id_park || !id_user || !rating) {
//       return res.status(400).json({
//         error: "Missing fields. Park, user and rating are required",
//       });
//     }

//     const findPark = await Park.findOne({ where: { id_park: id_park } });

//     if (!findPark) {
//       return res.status(404).json({ error: "Park not found" });
//     }

//     const ratingExists = await ParkRating.findOne({
//       where: { id_park: id_park, id_user: id_user },
//     });

//     if (ratingExists) {
//       return res.status(400).json({ error: "Rating already exists" });
//     }

//     const park = await Park.findOne({ where: { id_park: id_park } });
//     if (!park) {
//       return res.status(404).json({ error: "Park not found" });
//     }

//     const newRating = await ParkRating.create({
//       id_park: id_park,
//       id_user: id_user,
//       rating: rating,
//     });

//     const findAllRatings = await ParkRating.findAll({
//       where: { id_park: id_park },
//     });

//     let sum = 0;
//     findAllRatings.forEach((rating) => {
//       sum += parseInt(rating.rating);
//     });

//     const avgRating = sum / findAllRatings.length;

//     park.average_rating = avgRating;
//     park.save();
//     return res
//       .status(200)
//       .json({ success: "Rating created", rating: newRating });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Something went wrong. Plese try again later",
//       details: error,
//     });
//   }
// };

// exports.getRating = async (req, res) => {
//   const { parkId, ratingId } = req.params;
//   try {
//     const park = await Park.findOne({ where: { id_park: parkId } });

//     if (!park) {
//       return res.status(404).json({ error: "Park not found" });
//     }

//     const rating = await ParkRating.findOne({ where: { id_rating: ratingId } });
//     if (!rating) {
//       return res.status(404).json({ error: "Rating not found" });
//     }
//     return res
//       .status(200)
//       .json({ success: "Retrieved rating", rating: rating });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Something went wrong. Plese try again later",
//       details: error,
//     });
//   }
// };

// exports.updateRating = async (req, res) => {
//   const { rating } = req.body;
//   const { parkId, ratingId } = req.params;

//   try {
//     const park = await Park.findOne({ where: { id_park: parkId } });

//     if (!park) {
//       return res.status(404).json({ error: "Park not found" });
//     }

//     const ratingToUpdate = await ParkRating.findOne({
//       where: { id_rating: ratingId },
//     });
//     if (!ratingToUpdate) {
//       return res.status(404).json({ error: "Rating not found" });
//     }

//     ratingToUpdate.rating = rating;
//     await ratingToUpdate.save();

//     let sum = 0;
//     const findAllRatings = await ParkRating.findAll({
//       where: { id_park: parkId },
//     });
//     findAllRatings.forEach((rating) => {
//       sum += parseInt(rating.rating);
//     });

//     const avgRating = sum / findAllRatings.length;

//     park.average_rating = avgRating;
//     park.save();

//     return res
//       .status(200)
//       .json({ success: "Rating updated", rating: ratingToUpdate });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Something went wrong. Plese try again later",
//       details: error,
//     });
//   }
// };

// exports.deleteRating = async (req, res) => {
//   const { parkId, ratingId } = req.params;
//   try {
//     const park = await Park.findOne({ where: { id_park: parkId } });

//     if (!park) {
//       return res.status(404).json({ error: "Park not found" });
//     }

//     const rating = await ParkRating.findOne({ where: { id_rating: ratingId } });
//     if (!rating) {
//       return res.status(404).json({ error: "Rating not found" });
//     }

//     await rating.destroy();
//     return res.status(200).json({ success: "Rating deleted" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Something went wrong. Plese try again later",
//       details: error,
//     });
//   }
// };