const sequelize = require("../sequelizeconnection");
const { Sequelize, DataTypes } = require("sequelize");
const Park = require("./park");
const User = require("./user");
const Place = sequelize.define(
  "Place",
  {
    id_place: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_park: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Park,
        key: "id_park",
      },
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    end: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    amount: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
      defaultValue: null,
    },
    is_ocupied: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "Place",
    timestamps: false,
  }
);
module.exports = Place;
