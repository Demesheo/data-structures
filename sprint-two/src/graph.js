

var Graph = function(){
	this.storageNodes = {};
	
};

var graphNode = function (value) {
	this.value = value;
	var nodeObj = {};
	this.edges = [];

}


Graph.prototype.addNode = function(node){

	this.storageNodes[node] = new graphNode(node);
};

Graph.prototype.contains = function(node){
	// console.log('thisStorage: ', this.storageNodes)
	return _.contains(this.storageNodes[node], node);
};

Graph.prototype.removeNode = function(node){
	delete this.storageNodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	// console.log('hasEdge thisStorage: ', this.storageNodes)
	// console.log('hasEdges storageNodes[node].edge: ', _.contains(this.storageNodes[fromNode].edges, toNode));
	return _.contains(this.storageNodes[fromNode].edges, toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.storageNodes[fromNode].edges.push(toNode);	
	// console.log('thisStorage: ', this.storageNodes)
	// console.log('storageNodes-edges: ', this.storageNodes[fromNode].edges);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	console.log('thisStorage before: ', this.storageNodes)	
	this.storageNodes[fromNode].edges.pop();
	console.log('thisStorage after: ', this.storageNodes)
};

Graph.prototype.forEachNode = function(cb){
	return _.each(this.storageNodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

