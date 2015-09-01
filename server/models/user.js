'use strict';
module.exports = function (sequelize, DataTypes) {
  var attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    lastname: {
      type: DataTypes.STRING
    },
    firstname: {
      type: DataTypes.STRING
    },
    middlename: {
      type: DataTypes.STRING
    },
    company: {
      type: DataTypes.STRING
    },
    info: {
      type: DataTypes.TEXT
    },
    job: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    userGroup: {
      type: DataTypes.INTEGER
    },
    forgotPasswordCode: {
      type: DataTypes.STRING
    },
    visible: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  };
  var options = {
    associate: function (models) {
      models.user.hasMany(models.oauthAccessToken, {
        onDelete: 'cascade'
      });
      models.user.hasMany(models.oauthRefreshToken, {
        onDelete: 'cascade'
      });
      models.user.hasMany(models.bid);
    }
  };

  return sequelize.define('user', attributes, options);
};
