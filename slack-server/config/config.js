const path = require('path');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: path.resolve('dev.db'),
    define: {
      underscored: true
    }
  },
  test: {
    dialect: 'postgres',
    database: 'slack',
    username: 'postgres',
    password: 'postgress',
    define: {
      underscored: true
    }
  },
  production: {
    dialect: 'sqlite',
    storage: path.resolve('prod.db'),
    define: {
      underscored: true
    }
  }
};
