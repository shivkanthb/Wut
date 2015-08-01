#! /usr/bin/env node


var query = process.argv.slice(2);

//console.log("open "+query[0]);


var exec = require('child_process').exec;
var child = exec('open ' + query[0]);
