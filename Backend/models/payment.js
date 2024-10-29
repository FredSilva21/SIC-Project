const sequelize = require("../sequelizeconnection");
const { Sequelize, DataTypes } = require("sequelize");
const Place = require("./place");
const User = require("./user");
const Payment = sequelize.define(
  "Payment",
  {
    id_payment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id_place: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Place,
        key: "id_place",
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
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { tableName: "Payment", timestamps: false }
);
module.exports = Payment;
