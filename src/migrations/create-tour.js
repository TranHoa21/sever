'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Tours', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,

            },
            image: {
                type: DataTypes.STRING,
            },
            link: {
                type: DataTypes.STRING,

            },

            createdAt: {
                allowNull: false,
                type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                allowNull: false,
                type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            places_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.STRING,

            },
            address: {
                type: Sequelize.STRING,
                allowNull: false,

            },
            day: {
                type: Sequelize.STRING,
                allowNull: false,

            },
            introduce: {
                type: Sequelize.TEXT,
                allowNull: false,

            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Tours');
    }
};

