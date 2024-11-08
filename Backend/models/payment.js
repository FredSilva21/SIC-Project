// const sequelize = require("../sequelizeconnection");
// const { Sequelize, DataTypes } = require("sequelize");
// const Place = require("./place");
// const User = require("./user");
// const Park = require("./park");
// const Payment = sequelize.define(
//   "Payment",
//   {
//     id_payment: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     id_place: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: Place,
//         key: "id_place",
//       },
//     },
//     id_park: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: Park,
//         key: "id_park",
//       },
//     },
//     id_user: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: User,
//         key: "id_user",
//       },
//     },
//     date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: Sequelize.NOW,
//     },
//     amount: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     }
//   },
//   { tableName: "Payment", timestamps: false }
// );
// module.exports = Payment;