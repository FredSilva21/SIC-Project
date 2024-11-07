const { DataTypes } = require("sequelize");
const sequelize = require("../sequelizeconnection");

const Park = sequelize.define(
  "Park",
  {
    id_park: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    average_rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    free_places: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue:undefined
    },
    price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    image:{
      type: DataTypes.BLOB,
      allowNull: false
    }
  },
  {
    tableName: "park",
    timestamps: false,
    hooks: {
      beforeCreate: (park) => {
        // Define o valor de `free_places` igual ao `capacity` ao criar um novo registro
        if (park.free_places === undefined) {
          park.free_places = park.capacity;
        }
      },
    },
  }
);

module.exports = Park;
