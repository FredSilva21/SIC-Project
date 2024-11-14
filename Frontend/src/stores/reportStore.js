import mqttService from "@/services/mqttService";
import { defineStore } from "pinia";
const url = "http://localhost:3000";

export const useReportStore = defineStore("notification", {
  state: () => ({
    reports: [],
    report: {},
  }),
  getters: {
    getReports: (state) => state.reports,
    getReport: (state) => state.report,
  },
  actions: {
    async fetchReports(parkId) {
      const token = localStorage.getItem("token");
      const response = await fetch(`${url}/parks/${parkId}/reports`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      this.reports = data.reports;
    },
    async deleteReport(reportId,parkId) {
      const token = localStorage.getItem("token");
      const response = await fetch(`${url}/parks/${parkId}/reports/${reportId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        this.fetchReports(parkId);
      }
    }
  },
});
