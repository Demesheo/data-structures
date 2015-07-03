var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.storage = {};
  queueInstance.count = 0;

  return queueInstance;

};

var queueMethods = {};

queueMethods.enqueue = function (value) {
	this.count++;
	this.storage[this.count] = value;
};

queueMethods.dequeue = function () {
	var last = this.storage[this.count];
	var first = this.storage[1];

	for (var i = 1; i < this.count; i++) {
		this.storage[i] = this.storage[1 + i];
	}

	if (this.count > 0) {
		delete this.storage[this.count];
		this.count--;
	}

	return first;
};

queueMethods.size = function () {
	return this.count;
};

