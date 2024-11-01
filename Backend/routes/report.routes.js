const express = require("express");
const router = express.Router();
const ReportController = require("../controllers/report.controller");
const { verifyUser, verifyAdmin } = require("../middleware/jwt");

router
  .get("/parks/:parkId/reports", verifyUser, ReportController.getAllReports)
  .post("/parks/:parkId/reports", verifyUser, ReportController.createReport);

router.get("/parks/:parkId/reports/:reportId",verifyUser,ReportController.getReportId)
.delete("/parks/:parkId/reports/:reportId",verifyUser,ReportController.deleteReport)
module.exports = router;
