'use strict';
module.exports = function(sequelize, DataTypes) {
  var refurbished_products = sequelize.define('refurbished_products', {
    product: {
      type:DataTypes.STRING,
      length: 8
    },
    description: {
      type: DataTypes.STRING,
      length: 255
    },
    quantity: {
      type: DataTypes.STRING,
      length: 1,
    },
    original_price: {
      type: DataTypes.STRING,
      length: 12 
    },
    discount_price: {
      type: DataTypes.STRING,
      length: 12
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return refurbished_products;
};