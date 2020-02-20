'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "mopars", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2020-02-18T05:35:23.156Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "mopars",
            {
                "MoparID": {
                    "type": Sequelize.INTEGER(5).UNSIGNED,
                    "field": "MoparID",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
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
                "VIN": {
                    "type": Sequelize.STRING(17),
                    "field": "VIN",
                    "allowNull": false
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
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "idusers": {
                    "type": Sequelize.INTEGER(11),
                    "field": "idusers",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING(45),
                    "field": "FirstName",
                    "allowNull": false
                },
                "LastName": {
                    "type": Sequelize.STRING(45),
                    "field": "LastName",
                    "allowNull": false
                },
                "UserName": {
                    "type": Sequelize.STRING(45),
                    "field": "UserName",
                    "unique": true,
                    "allowNull": false
                },
                "Password": {
                    "type": Sequelize.STRING(45),
                    "field": "Password",
                    "allowNull": false
                },
                "Email": {
                    "type": Sequelize.STRING(45),
                    "field": "Email",
                    "unique": true,
                    "allowNull": false
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
    }
];

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
