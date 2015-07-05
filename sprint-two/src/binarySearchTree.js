var BinarySearchTree = function(value){
	
	this.storageNodes = {};

};

var treeNodes = function (value) {
	this.value = value;
	this.left = null;
	this.right = null;

}


BinarySearchTree.prototype.insert = function (value) {
	this.storageNodes[value] = new treeNodes(value);

}; 

BinarySearchTree.prototype.contains = function () {

}; 

BinarySearchTree.prototype.depthFirstLog = function () {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
