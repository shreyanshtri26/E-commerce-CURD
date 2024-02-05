const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'postgres', 'admin123', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
