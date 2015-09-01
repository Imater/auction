'use strict';
module.exports = function (sequelize, DataTypes) {
  var attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER
    },
    lotId: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.INTEGER
    },
    visible: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  };
  var options = {
    associate: function (models) {
      models.bid.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'bidUser'
      });
    }
  };

  return sequelize.define('bid', attributes, options);
};
