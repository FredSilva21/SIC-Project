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
    },
    id_park: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Park,
        key: "id_park",
      },
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id_user",
      },
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    end: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    isPayed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
  }},
  { tableName: "Place", timestamps: false }
);
module.exports = Place;
