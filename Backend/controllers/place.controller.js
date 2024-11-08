const { User, Place, Park } = require("../models/index");

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
    await place.save();

    findPark.free_places++;
    findPark.save();

    return res.status(200).json({ success: "Place updated", place });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};