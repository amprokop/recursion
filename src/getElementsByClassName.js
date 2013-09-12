var getElementsByClassName = function(className){

  var output = [];
  var nodes = [document.body];

  var walkDown = function(nodeList, func){
    for (var i = 0; i < nodeList.length; i++){
      if (nodeList[i].nodeType === 1){
        func(nodeList[i]);
      };

      if (nodeList[i].childNodes){
        walkDown(nodeList[i].childNodes, func);
      };
    }
  }

  walkDown(nodes, function(node){
    if (node.classList.contains(className)) {
      output.push(node);
    }
  });

  return output;
}
































