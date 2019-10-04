/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define('parent', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true
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
    tableName: 'parent',
    underscored: true,
    createdAt: 'create_ts',
    deletedAt: false,
    updatedAt: false,
  });
};
