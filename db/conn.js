const mysql = require('mysql2/promise');
const Sequelize = require('sequelize');


async function createDatabase() {
  const connection = await mysql.createConnection(
    'mysql://uigd2pxdqjqaegcc:DHJWSfmX7P8wXSAu2kp0@btkssictpreeajudgtae-mysql.services.clever-cloud.com:3306/btkssictpreeajudgtae'
  );

  //await connection.query('CREATE DATABASE IF NOT EXISTS diarioyanna');
  connection.end();
}

const sequelize = new Sequelize('mysql://uigd2pxdqjqaegcc:DHJWSfmX7P8wXSAu2kp0@btkssictpreeajudgtae-mysql.services.clever-cloud.com:3306/btkssictpreeajudgtae');

module.exports = sequelize;

createDatabase().then(() => {
  console.log('Database created');
});
