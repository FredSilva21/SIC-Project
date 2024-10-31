const { Park } = require("../models/index");

exports.getAllParks = async (req, res) => {
  try {
    const parks = await Park.findAll();
    return res
      .status(200)
      .json({ success: "Retrieved all parks", parks: parks });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
};

exports.createPark = async (req, res) => {
  const { name, location, capacity, price } = req.body;

  try {
    if (!name || !location || !capacity || !price) {
      return res.status(400).json({
        error:
          "Missing fields. Name, location, capacity and price are required",
      });
    }

    const newPark = await Park.create({
      name: name,
      location: location,
      capacity: capacity,
      price: price,
    });

    return res.status(200).json({ success: "Park created", park: newPark });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
};

exports.getPark = async (req, res) => {
  const { id } = req.params;
  try {
    const park = await Park.findOne({ where: { id_park: id} });
    if (!park) {
      return res.status(404).json({ error: "Park not found" });
    }
    return res.status(200).json(park);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
};

exports.updatePark = async (req, res) => {
  const { name, location, capacity, price, rating } = req.body;

  try {
    const park = await Park.findOne({ where: { id_park: req.params.id } });
    if (!park) {
      return res.status(404).json({ error: "Park not found" });
    }

    if (name) {
      park.name = name;
    }
    if (location) {
      park.location = location;
    }
    if (capacity) {
      park.capacity = capacity;
    }
    if (price) {
      park.price = price;
    }
    if (rating) {
      park.average_rating = rating;
    }

    await park.save();
    return res.status(200).json({ success: "Park updated", park: park });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
};

exports.deletePark = async (req, res) => {
  try {
    const park = await Park.findOne({ where: { id_park: req.params.id } });
    if (!park) {
      return res.status(404).json({ error: "Park not found" });
    }
    await park.destroy();
    return res.status(200).json({ success: "Park deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
};
