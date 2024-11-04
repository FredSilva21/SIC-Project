const express = require("express");
const router = express.Router();
const PaymentController = require("../controllers/payment.controller");
const { verifyUser } = require("../middleware/jwt");

router
  .get("/parks/:parkId/payments", verifyUser, PaymentController.getAllPayments)
  .post("/parks/:parkId/places/:placeId/payments", verifyUser, PaymentController.createPayment);

router
  .get(
    "/parks/:parkId/payments/:paymentId",
    verifyUser,
    PaymentController.getPayment
  )
  .patch(
    "/parks/:parkId/payments/:paymentId",
    verifyUser,
    PaymentController.updatePayment
  )
  .delete(
    "/parks/:parkId/payments/:paymentId",
    verifyUser,
    PaymentController.deletePayment
  );
module.exports = router;