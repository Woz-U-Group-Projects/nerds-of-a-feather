'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "updatedAt" from table "mopars"
 * removeColumn "createdAt" from table "mopars"
 * removeColumn "updatedAt" from table "users"
 * removeColumn "createdAt" from table "users"
 * createTable "reviews", deps: [mopars]
 * changeColumn "Password" on table "users"
 *
 **/

var info = {
    "revision": 2,
    "name": "update_password_length",
    "created": "2020-03-13T19:58:17.602Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["mopars", "updatedAt"]
    },
    {
        fn: "removeColumn",
        params: ["mopars", "createdAt"]
    },
    {
        fn: "removeColumn",
        params: ["users", "updatedAt"]
    },
    {
        fn: "removeColumn",
        params: ["users", "createdAt"]
    },
    {
        fn: "createTable",
        params: [
            "reviews",
            {
                "idreviews": {
                    "type": Sequelize.INTEGER,
                    "field": "idreviews",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "body": {
                    "type": Sequelize.STRING(1000),
                    "field": "body",
                    "allowNull": true
                },
                "rating": {
                    "type": Sequelize.INTEGER,
                    "field": "rating",
                    "allowNull": false
                },
                "mopar_id": {
                    "type": Sequelize.INTEGER.UNSIGNED,
                    "field": "mopar_id",
                    "references": {
                        "model": "mopars",
                        "key": "MoparID"
                    },
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "Password",
            {
                "type": Sequelize.STRING(100),
                "field": "Password",
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
