
var events = require('events'),
	colors = require('colors');

var gitwin = function(path){
	events.EventEmitter.call(this);
	this.path = path;
	this.command = '';
	}

gitwin.prototype.__proto__ = events.EventEmitter.prototype;

gitwin.prototype.buildCommand = function(cmd) {
		this.command = 'cd '.concat(this.path,' & git ',cmd);
	}
	
gitwin.prototype.exec = function (eventName) {
	var self = this;
	var cmd = self.command;
	var childProcess = require('child_process'), ls;
	ls = childProcess.exec(cmd, function (error, stdout, stderr) {		
		self.emit('log',null,'execute command: '.concat(cmd));
		var msg = '';
		if (error) {
			msg = ('\nstack...\n' + error.stack).grey+('\n failed - errors'.white.redBG);
			console.log('ERROR: '+msg);
			self.emit(eventName,error,msg);
		}
		else{
			self.emit(eventName,null,stdout);
		}
	});
}

gitwin.prototype.execute = function(eventName){
		var eventName = eventName;
		this.buildCommand(eventName);
		this.exec(eventName);
}

gitwin.prototype.pull = function() {
		this.execute('pull');
	}

gitwin.prototype.status = function() {
		this.execute('status');
	}

gitwin.prototype.log = function (error, stdout, stderr) {
		var msg = 'git status: '.concat(stdout);
		if (error != null) {
			msg = msg.concat('\nERROR: unable to process ',error,' /n FULL ERROR: ',stderr);
		}
		console.log(msg);
	};

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

gitwin.prototype.help = function(){
	console.log('\n*****************');
	console.log('git win - help');
	console.log('*****************');
	var events = ['pull','status','log'];
	var msg = ('available events:');
	events.forEach(
		function(name){ 
			if(msg.endsWith(':')){
				msg+=' '; }	
			else	{ 
				msg+=', '} 
			msg+=name.cyanBG;
		});
	console.log(msg);
	console.log('\n   event example usage (log): '.grey+'\n     "gitwin_instance.on(\'log\',function(error,msg){console.log(msg);});"'.cyan);
}
	
module.exports = gitwin;