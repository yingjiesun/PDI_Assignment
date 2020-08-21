function display_merged_aray(obj){	
	document.getElementById("display").innerHTML = JSON.stringify(obj);
	var parsed = ""; 
	for (var i = 0; i< obj.length; i++) {
         var myobj=  obj[i];
         for (var property in myobj) {
             parsed += property + " : " + myobj[property] + "\n";          
         }
         parsed += "\n";
     } 
	document.getElementById("display2").innerHTML = parsed;
}

function handclick(obj){
	if (obj.value == 1){
		display_merged_aray(get_merged_json_array(input_arr));
	}else{
		display_merged_aray(get_merged_json_array(input_arr1));
	}
}