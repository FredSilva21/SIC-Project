const sequelize = require("../sequelizeconnection");
const { Sequelize, DataTypes } = require("sequelize");
const Report = sequelize.define(
  "Report",
  {
    id_report: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_place: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    average_occupation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    revenue: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ["Diary", "Weekly", "Monthly"],
    },
  },
  { tableName: "Report", timestamps: false }
);
module.exports = Report;
