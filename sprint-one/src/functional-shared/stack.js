  var extend = function(copyTo, copyFrom) {
  	for (var property in copyFrom) {
  		copyTo[property] = copyFrom[property];
  	}
  };


  var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.capacity = 0;

  extend(stack, stackMethods);
  return stack; 
};

var stackMethods = {
	
	size: function(){
		return this.capacity;
	},

	pop: function() {
		var popped = this[capacity];
		delete this[capacity];
		this.capacity--;
		return popped;
	},


	push: function (value) {
		this.capacity++;
		this[capacity] = value;


	}

};


