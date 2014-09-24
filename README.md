# gitwin - git windows for node.js

### example - pull
```
	var _gitwin = require('gitwin');
	var gitwin = new _gitwin();
	gitwin.path = "c:/your_app";
	gitwin.pull();

```

### example - status
```
	var _gitwin = require('gitwin');
	var gitwin = new _gitwin();
	gitwin.path = "c:/your_app";
	gitwin.status();

```

### callback optional
```
	var callbackdone  = function (){
		console.log('gitwin is done! move on...');
	}
	var _gitwin = require('gitwin');
	var gitwin = new _gitwin(callbackdone);
	gitwin.path = "c:/your_app";
	gitwin.status();
	
```