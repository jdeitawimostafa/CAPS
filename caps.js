'use strict';

const events = require('./events.js');
const vendor = require('./vendor-module/vendor.js');
const driver = require('./drivers-module/driver.js');

events.on('pickup',(payload) => {
  timeStamp('pickup',payload);
});

events.on('in-transit',(payload) => {
  timeStamp('in-transit',payload);
});

events.on('delivered',(payload) => {
  timeStamp('delivered',payload);
});

function timeStamp(event,payload){
  console.log('EVENT',{event,time:new Date(),payload});
}

module.exports = events;