'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "mopars", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-02-13T16:42:24.114Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "mopars",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "MoparID": {
                "type": Sequelize.INTEGER,
                "field": "MoparID",
                "allowNull": true
            },
            "Make": {
                "type": Sequelize.STRING(50),
                "field": "Make",
                "allowNull": false
            },
            "MODEL": {
                "type": Sequelize.STRING(50),
                "field": "MODEL",
                "allowNull": false
            },
            "Year": {
                "type": Sequelize.INTEGER,
                "field": "Year",
                "allowNull": true
            },
            "DOORS": {
                "type": Sequelize.INTEGER,
                "field": "DOORS",
                "allowNull": true
            },
            "MILEAGE": {
                "type": Sequelize.INTEGER,
                "field": "MILEAGE",
                "allowNull": true
            },
            "COLOR": {
                "type": Sequelize.STRING(50),
                "field": "COLOR",
                "allowNull": true
            },
            "PRICE": {
                "type": Sequelize.INTEGER,
                "field": "PRICE",
                "allowNull": true
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
