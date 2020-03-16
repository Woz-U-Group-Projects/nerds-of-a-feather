/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    idusers: {
      type: DataTypes.INTEGER(),
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
      type: DataTypes.STRING(16),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    }
  }, 
  );
  return users;
};
