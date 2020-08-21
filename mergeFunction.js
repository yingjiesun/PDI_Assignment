/**
 * INPUT: Array of JSON Object as defined in the assignment
 * OUTPUT: Merged Array as required in the assignment *
 * */

"use strict";

function get_merged_json_array(input_arr){
	var merged_arr = []; 	// the result
	var maps = []; 			// array of maps, each map is converted from array 'values' in JSON object
	for (var x = 0; x < input_arr.length; x++){		
		maps[x] = get_map(input_arr[x].values);
	}	
	for ( var i = 0; i < input_arr[0].values.length; i++){	// start generating the merged array
		var dim_names = [];									//dimension names, which will be pushed into merged array
		var dim_name_values = [];							// dimension values
		for (var j = 0; j < input_arr.length; j++ ){ 
			for (var k = 0; k < input_arr[j].dimensions.length; k++){
				dim_names[k] = input_arr[j].dimensions[k].dimensionName;
				dim_name_values[k] = input_arr[j].dimensionValues[k][input_arr[j].values[i][k]]
			}
		}
		var item = {}; // element of merged array
		for (var m = 0; m < dim_names.length; m++){			
			item [dim_names[m]] = dim_name_values[m];					
		}
		for (var n = 0; n < input_arr.length; n++ ){
			var map_key = get_map_key(input_arr[n].values[i]); 
			item [input_arr[n].facts[0].factName] = maps[n].get(map_key);		//get fact values from maps
		}		
		merged_arr.push(item);
	}
	return merged_arr;
}

/**
 * INPUT: two dimensional array, values in the JSON object
 * OUTPUT: Map  
 * */
function get_map(arr){								
	let map = new Map();
	var thisKey;
	for (var i=0;i< arr.length;i++){
		var thisKey = "";
		var thisArrLength = arr[i].length;
		for (var j = 0; j< thisArrLength - 1; j++)
		thisKey += arr[i][j];						// map key is the combination of element of array 'values', except the last element
		map.set(thisKey, arr[i][thisArrLength - 1]); // map value is the last element of array 'values'
	}
	return map;
}

/**
 * INPUT: One dimensional array, one element of array values in the JSON object
 * OUTPUT: Map key
 * */
function get_map_key(arr){	
	var thisKey = "";
	for (var i=0; i < arr.length - 1; i++){		
		thisKey += arr[i];
	}
	return thisKey;
}



