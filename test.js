// const si = require('systeminformation');
//
// //si.cpuTemperature().then(data => console.log(data.main));
//
//
// 'use strict';
//
// const { networkInterfaces } = require('os');
//
// const nets = networkInterfaces();
// const results = Object.create(null); // Or just '{}', an empty object
//
// for (const name of Object.keys(nets)) {
//     for (const net of nets[name]) {
//         // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
//         if (net.family === 'IPv4' && !net.internal) {
//             if (!results[name]) {
//                 results[name] = [];
//             }
//             results[name].push(net.address);
//         }
//     }
// }
// console.log(results["en0"][0]);

// var server = require('http').createServer(function(req, res) {
//     res.end('Good job!');
// });
//
// // Wrap the server object with additional functionality.
// // This should be done immediately after server construction, or before you start listening.
// // Additional functionailiy needs to be added for http server events to properly shutdown.
// server = require('http-shutdown')(server);
//
// // Listen on a port and start taking requests.
// server.listen(3000);
//
// // Sometime later... shutdown the server.
// server.shutdown(function(err) {
//     if (err) {
//         return console.log('shutdown failed', err.message);
//     }
//     console.log('Everything is cleanly shutdown.');
// });

const si = require('systeminformation')
// si.graphics().then(data => console.log(data.controllers[0]['model']))
//
// networkTest();
//
// async function networkTest() {
//     var defaultInterface = await si.networkInterfaceDefault();
//
//     var obj = await si.networkInterfaces();
//
//
//     for(let i of obj){
//         if(i.iface == defaultInterface){
//             console.log(i.ip4)
//         }
//     }
//
// }
test();


async function test() {

    var obj = await si.graphics();

    console.log(obj.controllers[0])

}