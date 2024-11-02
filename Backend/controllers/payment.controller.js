const { Payment, Park, Place } = require("../models/index");

exports.getAllPayments = async (req, res) => {
  const { parkId } = req.params;
  try {
    const park = await Park.findByPk(parkId);

    if (!park) {
      return res.status(404).json({ error: "Park not found" });
    }

    const payments = await Payment.findAll({
      where: { id_park: parkId },
      include: [
        {
          model: Place,
          attributes: ["id_place", "start"],
        },
      ],
    });
    return res
      .status(200)
      .json({ success: "Retrieved all payments", payments });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong. Plese try again later",
      details: error,
    });
  }
};

exports.createPayment = async (req, res) => {
  const { amount } = req.body;
  const { parkId, placeId } = req.params;
  const id_user = res.locals.userId;
  try {
    const park = await Park.findByPk(parkId);
    if(!park) {
      return res.status(404).json({ error: "Park not found" });
    }

    const place = await Place.findByPk(placeId);
    if(!place) {
      return res.status(404).json({ error: "Place not found" });
    }

    if(place.id_park !== Number(parkId)) {
      return res.status(400).json({ error: "Place does not belong to the park" });
    }

    if(place.is_ocuppied === false) {
      return res.status(400).json({ error: "Place is not occupied" });
    }

    const payment = await Payment.create({
      id_place: placeId,
      id_park: parkId,
      id_user,
      amount,
    });

    place.is_ocupied = false;
    place.end= new Date();
    await place.save();

    return res.status(201).json({ success: "Payment created", payment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getPayment = async (req, res) => {
  const { paymentId } = req.params;
  try {
    const payment = await Payment.findByPk(paymentId);

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    return res.status(200).json({ success: "Retrieved payment", payment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updatePayment = async (req, res) => {
  const { paymentId } = req.params;
  const { amount } = req.body;
  try {
    const payment = await Payment.findByPk(paymentId);

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    payment.amount = amount;
    await payment.save();

    return res.status(200).json({ success: "Payment updated", payment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deletePayment = async (req, res) => {
  const { paymentId } = req.params;
  try {
    const payment = await Payment.findByPk(paymentId);

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    await payment.destroy();

    return res.status(200).json({ success: "Payment deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};