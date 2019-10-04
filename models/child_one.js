/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define('child_one', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    create_ts: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    tableName: 'child_one',
    underscored: true,
    createdAt: 'create_ts',
    deletedAt: false,
    updatedAt: false,
  });
};
