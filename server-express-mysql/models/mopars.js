/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mopars', {
    MoparID: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      allowNull: true
    },
    DOORS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MILEAGE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COLOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRICE: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'mopars'
  });
};
