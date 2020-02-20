'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "id" from table "mopars"
 * createTable "users", deps: []
 * addColumn "VIN" to table "mopars"
 * changeColumn "MoparID" on table "mopars"
 * changeColumn "MoparID" on table "mopars"
 * changeColumn "MoparID" on table "mopars"
 * changeColumn "MoparID" on table "mopars"
 *
 **/

var info = {
    "revision": 2,
    "name": "initial_migration",
    "created": "2020-02-18T05:01:02.587Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["mopars", "id"]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "idusers": {
                    "type": Sequelize.INTEGER(11),
                    "field": "idusers",
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
    },
    {
        fn: "addColumn",
        params: [
            "mopars",
            "VIN",
            {
                "type": Sequelize.STRING(17),
                "field": "VIN",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "mopars",
            "MoparID",
            {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "MoparID",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "mopars",
            "MoparID",
            {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "MoparID",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "mopars",
            "MoparID",
            {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "MoparID",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "mopars",
            "MoparID",
            {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "MoparID",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
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
