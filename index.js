#! /usr/bin/env node


var query = process.argv.slice(2);
var thequery="";
//console.log(process.argv.length);
var googleQuerySearch=""

var command = process.platform === "win32" ? "cmd" :
                  process.platform === "darwin" ? "open" :
                  "xdg-open";

if(query[0]=="-m")
{
	query = query.slice(1);
	googleQuerySearch = "http://google.com/maps/search/";
}
else
	googleQuerySearch = "http://google.com/search?q=";

for (i=0;i<query.length;i++)
{
	thequery+= query[i]+ " ";
}
//console.log("open "+thequery);

var exec = require('child_process').exec;
var child = exec(command + ' ' + googleQuerySearch+encodeURIComponent(thequery).replace(/%20/g,'+'));
