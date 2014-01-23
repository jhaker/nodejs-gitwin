
var mocha = require('mocha'),
	should = require('should'),
	gitwin = require('../gitwin');
	
	
describe('commands',function(){

	var path = 'c:/yourapp';
	var git = new gitwin(path);
	
	describe('pull command',function(){
		git.pull();
		git.command.should.equal('cd c:/yourapp & git pull');
	})
	
	describe('status command',function(){
		git.status();
		git.command.should.equal('cd c:/yourapp & git status');
	})

	describe('build command',function(){
		git.buildCommand('');
		git.command.should.equal('cd c:/yourapp & git ');
	})

})
