function acmTeam(topic) {
	var arr = topic;
	var len = arr.length;

	var buf = [];
	var known=0, max_known = 0, know_all = 0;
	
	// why arr length - 1, ignore myself
	for(var i=0; i<len-1; i++) {
		var iItem = arr[i].split('');
		
		for(var j=i+1; j<len; j++) {
			var jItem = arr[j].split('');

			// tmp var
			known = 0;
	
			// each topic
			for(var k=0; k < iItem.length; k++) {
				if(iItem[k] == '1' || jItem[k] == '1') {
					known++;
				}

				// All topic we can know
				// in each topic loop, we keep review. know better
				if(max_known < known) {
					// global
        	max_known = known;
					// global
          know_all = 0;
        }

				// how many max know
        if(known == max_known)
        	know_all++;
			}
		}	
	}
	return [max_known, know_all]; 
}

var topic = [ '10101', '11100', '11010', '00101' ];
var out = acmTeam(topic);
console.log(out);
