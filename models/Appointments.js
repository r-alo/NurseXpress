const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../config/connection');

class Appointments extends Model {};

Appointments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        employee_id: {
            type: DataTypes.STRING,
            references: {
                model: 'employee',
                key: 'id'
            },
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        hour: {
            type: DataTypes.TIME,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            references: {
                model: 'cities',
                key: 'id',
            },
        },

    },
   {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'appointments'
    }
)

module.exports = Appointments;