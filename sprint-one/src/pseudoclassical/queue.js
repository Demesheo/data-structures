var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};

};

Queue.prototype.size = function () {
	return this.count;
};

Queue.prototype.enqueue = function (value) {
	this.count++;
	this.storage[this.count] = value;
};

Queue.prototype.dequeue = function () {
	var first = this.storage[1];

	for (var i = 1; i < this.count; i++) {
		this.storage[i] = this.storage[1+i];
	}

	if (this.count > 0) {
		delete this.storage[this.count];
		this.count--;
	}
	return first;
};

