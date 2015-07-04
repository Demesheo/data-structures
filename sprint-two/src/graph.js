

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
	this.storageNodes[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var target = _.indexOf(this.storageNodes[fromNode].edges, toNode);
	this.storageNodes[fromNode].edges.slice(target-1, target);

	var adjTarget = _.indexOf(this.storageNodes[toNode].edges, fromNode);
	this.storageNodes[toNode].edges.slice(adjTarget-1, adjTarget);	
	
};

Graph.prototype.forEachNode = function(cb){
	
	for(var key in this.storageNodes){
		cb(key); 
	}

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

