var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


//the point of prototypal is using Object.create() to reference to another object methods
	var stackInstance = Object.create(stackMethods);
	stackInstance.storage = {};
	stackInstance.count = 0;

	return stackInstance;

};

stackMethods = {}

stackMethods.push = function (value) {
	// add that value into storage {}, and increment count
	this.count++;
	this.storage[this.count] = value;
};

stackMethods.pop = function () {
	var popped = this.storage[this.count];
	delete this.storage[this.count];
	if (this.count > 0) {
		this.count--;
	}
	return popped;
};


stackMethods.size = function () {
	return this.count;
};




