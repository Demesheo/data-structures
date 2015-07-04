var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = Object.create(null);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage[item] = item;

};

setPrototype.contains = function(item){
	return _.contains(this._storage, item)

};

setPrototype.remove = function(item){
	var removed = this._storage[item];
	delete this._storage[item];
	return removed;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
