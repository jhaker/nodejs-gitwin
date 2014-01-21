var git = function(path){
	this.path = path;
	
	this.gitCommand = function(command) {
		return 'git ' + command;
	}
	
	this.log = function (error, stdout, stderr) {
		if (error != null) {
			console.log('ERROR: unable to process '  + error + ' /n FULL ERROR: ' + stderr);
		}
		console.log('git status: ' + stdout);
	};
	
	this.execCommand = function(command) {
		var self = this;
		var command = 'cd '  + path + ' & ' +  ' ' + command;
		var exec = require('child_process').exec;
		exec(command, self.log);
	}
	
	this.pull = function() {
		var self = this;
		var command = self.gitCommand('pull');
		self.execCommand(command);
	}
	
	this.status = function() {
		var self = this;
		var command = self.gitCommand('status');
		self.execCommand(command);
	}
	
}

module.exports = git;