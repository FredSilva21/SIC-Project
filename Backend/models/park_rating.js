const { DataTypes } = require("sequelize");
const sequelize = require("../sequelizeconnection");
const Park = require("./park");
const User = require("./user");

const ParkRating = sequelize.define(
  "ParkRating",
  {
    id_rating: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
    rating: {
      type: DataTypes.ENUM,
      values: ["1", "2", "3", "4", "5"],
      allowNull: false,
    },
  },
  { tableName: "park_rating", timestamps: false }
);

module.exports = ParkRating;
