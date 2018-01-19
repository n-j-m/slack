const path = require('path');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: path.resolve('dev.db')
  },
  test: {
    dialect: 'postgres',
    database: 'slack',
    username: 'postgres',
    password: 'postgress'
  },
  production: {
    dialect: 'sqlite',
    storage: path.resolve('prod.db')
  }
};
