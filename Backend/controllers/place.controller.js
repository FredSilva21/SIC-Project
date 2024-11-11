const { User, Place, Park,Payment } = require("../models/index");

exports.getAllPlaces = async (req, res) => {
  const { parkId } = req.params;
  try {
    const findPark = await Park.findByPk(parkId);

    if (!findPark) {
      return res.status(404).json({ error: "Park not found!" });
    }

    const places = await Place.findAll({
      where: { id_park: parkId },

    });

    return res
      .status(200)
      .json({ success: "Retrieved all occupied places", places });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.createPlace = async (req, res) => {
  const { parkId } = req.params;

  try {
    const findPark = await Park.findByPk(parkId);

    if (!findPark) {
      return res.status(404).json({ error: "Park not found!" });
    }

    if (findPark.free_places > 0) {
      findPark.free_places--;
      await findPark.save();
    }

    if (findPark.free_places === 0) {
      return res.status(400).json({ error: "No free places in the park" });
    }
    
    const place = await Place.create({
      id_park: parkId,
    });
    return res.status(201).json({ success: "Place created", place:place });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getPlace = async (req, res) => {
  const { placeId } = req.params;
  try {
    const place = await Place.findByPk(placeId);

    if (!place) {
      return res.status(404).json({ error: "Place not found!" });
    }

    return res.status(200).json({ success: "Retrieved place", place });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updatePlace = async (req, res) => {
  const { placeId } = req.params;
  try {
    const place = await Place.findByPk(placeId);

    if (!place) {
      return res.status(404).json({ error: "Place not found!" });
    }

    const findPark = await Park.findByPk(place.id_park);

    if (!findPark) {
      return res.status(404).json({ error: "Park not found!" });
    }

    if (place.end) {
      return res.status(400).json({ error: "Place is already payed" });
    }

    place.end = new Date();
    place.is_ocupied = false;
    place.amount = req.body.totalPrice;
    await place.save();

    findPark.free_places++;
    findPark.save();

    await Payment.create({
      id_place: placeId,
      id_park: place.id_park,
      id_user: res.locals.userId,
      amount: req.body.totalPrice,
      cardNumber: req.body.cardNumber,
      cardName: req.body.cardName,
      cardExpiration: req.body.cardExpiration,
      cardCVV: req.body.cardCVV,
    });

    return res.status(200).json({ success: "Place updated", place });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message });
  }
};

// exports.updateReport = async (req, res) => {
//   const { reportId } = req.params;
//   try {
//     const report = await Report.findByPk(reportId);

//     if (!report) {
//       return res.status(404).json({ error: "Report not found!" });
//     }

//     const findPark = await Park.findByPk(report.id_park);

//     if (!findPark) {
//       return res.status(404).json({ error: "Park not found!" });
//     }

//     if (report.type === "revenue") {
//       findPark.revenue += report.revenue;
//     } else if (report.type === "average_occupation") {
//       findPark.average_occupation += report.average_occupation;
//     }

//     await findPark.save();

//     return res.status(200).json({ success: "Report updated", report });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// }