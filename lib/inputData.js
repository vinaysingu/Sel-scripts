exports.input = function(callback){
	var stdin = process.stdin; 
		//stdin.setRawMode(true);    
		stdin.resume();
		stdin.setEncoding('utf8');
		
		stdin.on('data', function (key) 
		{
		var input = key;
		input = input.substr(0,input.length-2);
		callback(input);
		});
}