'use strict';

const faker = require('faker');
const events = require('../events');

require('dotenv').config();

const order = {
  storeName:process.env.STORE_NAME,
  orderId:faker.datatype.uuid(),
  customerName:faker.name.findName(),
  address:faker.address.streetName(),
};

setInterval(() => {
  order;
  events.emit('pickup',order);
}, 5000);


events.on('delivered',(payload) => {
  console.log('thank you :))');
});

module.exports = order;