const { faker } = require('@faker-js/faker');
const chalk = require('chalk');

setInterval(() => {
    const fecha = new Date();
    console.log(fecha);
}, 1000);