var stringifyJSON = function (obj) {

  var output = ''

  if (obj === null){
    output = output + 'null';

  } else if ((typeof obj === "number") || (typeof obj === "boolean")) {
    output = output + obj.toString();

  } else if (typeof obj === "string"){
    output = output + '"' + obj + '"';

  } else if (typeof obj === 'object'){    
    if (Array.isArray(obj)){
    
      output = output + '['  

        for (var i = 0; i < obj.length; i++){
          output = output + stringifyJSON(obj[i]);
            if (i < (obj.length - 1)){
              output = output + ',';
            }
        }

      output = output + ']';

    } else {

      output = output + '{'
        for (i in obj){
          output = output + stringifyJSON(i) + ':' + stringifyJSON(obj[i]).toString() + ',';
        }
        if (output.length > 1){
          output = output.substring(0, output.length - 1) //dumb workaround. how can i find the last item in an unordered collection?
        }
      output = output + '}';

    } 
  }
  
  return output;

};
