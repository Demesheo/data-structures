var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {
  	size: 0
  };

  extend(queue, queueMethods);

  return queue;
};

var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};

var queueMethods = {

	size: function(){
		return this.size;
	};





};



