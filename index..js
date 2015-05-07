#! /usr/bin/env node

var commander = require('commander');

commander
	.version('0.0.1')
	.option('-s, --start', 'Start the game')
	.parse(process.argv);






if(commander.s){
	console.log("Hello, welcome to our text-based Adventure. Commands are simple for the option given type in ./project follwed by a - with which ever option you choose for that task.");
}