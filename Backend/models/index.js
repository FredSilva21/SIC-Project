const sequelize = require("../sequelizeconnection");
const User = require("./user");
const Park = require("./park");
const Place = require("./place");
const Payment = require("./payment");
const Report = require("./report");
const ParkRating = require("./park_rating");

User.hasMany(Place, { foreignKey: "id_user" });
Place.belongsTo(User, { foreignKey: "id_user" });

Park.hasMany(Place, { foreignKey: "id_park" });
Place.belongsTo(Park, { foreignKey: "id_park" });

Place.hasMany(Payment, { foreignKey: "id_place" });
Payment.belongsTo(Place, { foreignKey: "id_place" });

User.hasMany(Payment, { foreignKey: "id_user" });
Payment.belongsTo(User, { foreignKey: "id_user" });

Park.hasMany(Report, { foreignKey: "id_park" });
Report.belongsTo(Park, { foreignKey: "id_park" });

ParkRating.belongsTo(Park, { foreignKey: "id_park" });
ParkRating.belongsTo(User, { foreignKey: "id_user" });

User.sync({ logging: false })
  .then(() => Park.sync({ logging: false }))
  .then(() => Place.sync({ logging: false }))
  .then(() => Report.sync({ logging: false }))
  .then(() => Payment.sync({ logging: false }))
  .then(() => ParkRating.sync({ logging: false }))
  .then(() => {
    console.log("All tables created successfully.");
  })
  .catch((err) => {
    console.error("Error creating tables:", err);
  });
module.exports = {
  User,
  Park,
  Place,
  Payment,
  Report,
  ParkRating
};
