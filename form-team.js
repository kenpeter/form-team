
function or(a, b){
	// This convert string to number
	// but this number is base 2
	// result still decimal 
	var newA = parseInt(a, 2);
	var newB = parseInt(b, 2);

	// toString, convert to binary 
	return (newA | newB).toString(2);
}

function isThere(key, buf) {
	for(var i=0; i<buf.length; i++) {
		var inkey = buf[i][0];
		if(key == inkey) {
			return buf[i];
		} else {
			continue;
		}
	}

	return false;
}

function sortKey(a, b) {
	var keyA = a[0];
	var keyB = b[0];
	return keyB - keyA;
}

function acmTeam(topic) {
	var arr = topic;

	var buf = [];
	for(var i=0; i<arr.length; i++) {
		var iItem = arr[i];
		
		for(var j=i+1; j<arr.length; j++) {
			var jItem = arr[j];
			var orItem = or(iItem, jItem);
			var key = parseInt(orItem, 2);	
		
			var objBuf;
			if( (objBuf = isThere(key, buf)) === false) {
				var obj = [key, 1, orItem];
				// No there
				buf.push(obj);
			} else {
				// is there
				objBuf[1] += 1; 
			}
		}	
	}

	buf.sort(sortKey);
	var times = buf[0][1];
	// why -1, because ....
	var freq = buf[0][2].split('1').length - 1;

	return [freq, times]; 
}

var topic = [ '10101', '11100', '11010', '00101' ];
var out = acmTeam(topic);
console.log(out);
