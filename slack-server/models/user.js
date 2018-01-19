module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Team, {
      through: 'member',
      foreignKey: 'userId'
    });
  };
  return User;
};
