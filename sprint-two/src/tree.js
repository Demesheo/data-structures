var Tree = function(value){
	var newTree = {};
	newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  extend(newTree, treeMethods);

  return newTree;
};


var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};


var treeMethods = {};

treeMethods.addChild = function(value){
	var newChild = Tree(value);         
	this.children.push(newChild);
	// console.log("array: ", this.children, "| value to add :", value);
	
	
};

treeMethods.contains = function(target){
	
	if (this.value === target) {
		return true;
	} 
	if (this.children) {
		for (var i = 0; i < this.children.length; i++) {
			if (this.children[i].contains(target)){
				return true;
			}
		}
	}
	return false;

};





/*
 * Complexity: What is the time complexity of the above functions?
 */
