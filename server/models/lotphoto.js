'use strict';
module.exports = function (sequelize, DataTypes) {
  var attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    lotId: {
      type: DataTypes.INTEGER
    },
    url: {
      type: DataTypes.STRING
    },
    title_ru: {
      type: DataTypes.STRING
    },
    title_eng: {
      type: DataTypes.STRING
    },
    description_ru: {
      type: DataTypes.TEXT
    },
    description_eng: {
      type: DataTypes.TEXT
    },
    order: {
      type: DataTypes.INTEGER
    }
  };
  var options = {
    associate: function (models) {
    }
  };

  return sequelize.define('lotphoto', attributes, options);
};
