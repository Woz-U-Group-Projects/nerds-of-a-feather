/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    idusers: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FirstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    UserName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    Password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    createdAt: {
      type: DataTypes.TIME(),
      defaultValue: DataTypes.NOW()
    },
    updatedAt: {
      type: DataTypes.TIME(),
      defaultValue: DataTypes.NOW()
    }
  }, {
    tableName: 'users'
  });
};
