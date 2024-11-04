const sequelize = require("../sequelizeconnection");
const { Sequelize, DataTypes } = require("sequelize");
const { Park } = require("./index")
const Report = sequelize.define(
  "Report",
  {
    id_report: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_park: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: Park,
        key: "id_park",
      }
    },
    name: {
      type: DataTypes.STRING,
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
