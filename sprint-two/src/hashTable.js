var HashTable = function(){
	this._limit = 8;
	this._storage = LimitedArray(this._limit);
};



HashTable.prototype.insert = function(k, v){
	var i = getIndexBelowMaxForKey(k, this._limit);
  // set the key and value pair as an object to be passed in with our set function
  // put that object in our storage array by passing our object as a value in set	
  // create var dataSet = {k : v}
  // this._storage.set(i, dataSet)
  var storedAt = this._storage.get(i);
  if(storedAt){
  	storedAt[k] = v;
  } else {
  	var dataSet = {};
  	dataSet[k] = v  
  	this._storage.set(i, dataSet);
  }
};

HashTable.prototype.retrieve = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit); 
	var storedAt = this._storage.get(i);
	console.log(storedAt)
	return storedAt[k];


};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var storedAt = this._storage.get(i);
	storedAt[k] = null;
	

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
