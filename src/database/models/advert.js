'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Advert.init({
    owner: DataTypes.STRING,
    type: DataTypes.STRING,
    nameofproduct: DataTypes.STRING,
    status: DataTypes.STRING,
    images: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Advert',
  });
  return Advert;
};