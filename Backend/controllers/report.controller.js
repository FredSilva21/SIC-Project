const { Park, Report } = require("../models/index");

exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.findAll({
      where: { id_park: req.params.parkId },
    });
    res.status(200).json({ success: "Reports found", reports: reports });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createReport = async (req, res) => {
  const { name, average_occupation, revenue, type } = req.body;
  const parkId = req.params.parkId;
  try {
    const findPark = await Park.findByPk(parkId);
    if (!findPark) {
      return res.status(404).json({ error: "Park not found" });
    }
    const report = await Report.create({
      name: name,
      average_occupation: average_occupation,
      revenue: revenue,
      type: type,
      id_park: parkId,
    });
    res.status(201).json({ success: "Report created", report: report });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};1

exports.getReportId = async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.reportId);
    if (report.id_park != req.params.parkId) {
      return res.status(404).json({ error: "Report not found" });
    }
    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }
    res.status(200).json({ success: "Report found", report: report });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.reportId);
    if (report.id_park != req.params.parkId) {
      return res.status(404).json({ error: "Report not found" });
    }
    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }
    await report.destroy();
    res.status(204).json({ success: "Report deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}