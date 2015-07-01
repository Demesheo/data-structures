var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var extend = function(copyTo, copyFrom) {
  	for (var property in copyFrom) {
  		copyTo[property] = copyFrom[property];
  	}
  };


  var stack = {};
  extend(stack, stackMethods);
  stack.size = 0;
  return stack;

};

var stackMethods = {
	size: function(){
		return this.size;
	}

};


