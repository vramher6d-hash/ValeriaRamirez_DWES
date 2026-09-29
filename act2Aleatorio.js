const { faker } = require('@faker-js/faker');
const chalk = require('chalk');
// --------------------------------------------------------------------------
const colores = [chalk.red, chalk.blue, chalk.green, chalk.yellow];
const color = colores[Math.floor(Math.random() * colores.length)];
// --------------------------------------------------------------------------

console.log(color(faker.person.fullName()));