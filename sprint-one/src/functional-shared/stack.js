var Stack = function() {
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.`

var stackMaker = {
	capacity : 0
};

extend(stackMaker, stackMethods);

return stackMaker; 

};

// var extend = function(copyTo, copyFrom) {
// 	for (var property in copyFrom) {
// 		copyTo[property] = copyFrom[property];
// 	}
// };

var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};

var stackMethods = {

// stackMethods.size = function() {
// 	return this.capacity;
// }

// stackMethods.push = function (value) {
// 	this.capacity++;
// 	this[this.capacity] = value;

	size: function(){
		return this.capacity;
	},

	pop: function() {
		var popped = this[this.capacity];
		delete this[this.capacity];
		if (this.capacity > 0) {
			this.capacity--;
		};
		return popped;
	},


	push: function (value) {
		this.capacity++;
		this[this.capacity] = value;
	}

};


