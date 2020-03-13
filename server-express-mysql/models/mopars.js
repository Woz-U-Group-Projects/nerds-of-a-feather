/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mopars', {
    MoparID: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Make: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MODEL: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DOORS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MILEAGE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    COLOR: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRICE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VIN: {
      type: DataTypes.STRING(17),
      allowNull: false
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
    tableName: 'mopars'
  });
};
