const mysql = require('mysql2/promise');
const Sequelize = require('sequelize');

async function createDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
  });

  await connection.query('CREATE DATABASE IF NOT EXISTS diarioyanna');
  connection.end();
}

const sequelize = new Sequelize('diarioyanna', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

createDatabase().then(() => {
  console.log('Database created');
});
