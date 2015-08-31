'use strict';
module.exports = function (sequelize, DataTypes) {
    var attributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title_ru: {
            type: DataTypes.STRING
        },
        title_eng: {
            type: DataTypes.STRING
        },
        lotFrom_ru: {
            type: DataTypes.STRING
        },
        lotFrom_eng: {
            type: DataTypes.TEXT
        },
        askPrice: {
            type: DataTypes.INTEGER
        },
        lotNumber: {
            type: DataTypes.INTEGER
        },
        startDateTime: {
            type: DataTypes.DATE
        },
        endDateTime: {
            type: DataTypes.DATE
        },
        lotSimpleNumber: {
            type: DataTypes.INTEGER
        },
        lotShortText_ru: {
            type: DataTypes.TEXT
        },
        lotShortText_eng: {
            type: DataTypes.TEXT
        },
        lotText_ru: {
            type: DataTypes.TEXT
        },
        lotText_eng: {
            type: DataTypes.TEXT
        },
        cover: {
            type: DataTypes.STRING
        },
        visible: {
            type: DataTypes.INTEGER
        },
        userGroup: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.ENUM(['wait', 'active', 'sold'])
        }
    };
    var options = {
        associate: function (models) {
        }
    };

    return sequelize.define('lot', attributes, options);
};
