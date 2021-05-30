'use strict';

const events = require('../events.js');
const order = require('../vendor-module/vendor.js');

events.on('pickup',(payload) => {
  setInterval(() => { // After 1 second
    console.log('DRIVER : picked up',order.orderId);
    events.emit('in-transit', payload);
  },1000);      

  setInterval(() => { //After 3 seconds
    console.log('delivered up : ',order.orderId);
    events.emit('delivered',payload);
  },3000);

});


