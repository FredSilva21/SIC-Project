const sequelize = require("../sequelizeconnection");
const { Sequelize, DataTypes, ENUM } = require("sequelize");
const Park = sequelize.define(
  "Park",
  {
    id_park: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.ENUM,
      values: ["1", "2", "3", "4", "5"],
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    // image: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  { tableName: "park", timestamps: false }
);
module.exports = Park;