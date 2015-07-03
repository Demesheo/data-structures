var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {
  	counter: 0,
    storage: {}
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
    console.log("counter:", this.counter)
    return this.counter;
  },

  enqueue: function (value) {
    this.counter++;
    this.storage[this.counter] = value;
    console.log("added:", this.storage[this.counter]);
  },

  dequeue: function(){
    //debugger;
    var last = this.storage[this.counter];
    var first = this.storage[1];
    console.log("removing:", first, "|last:", last);
    for(var i = 1; i < this.counter; i++){
      this.storage[i] = this.storage[1+i]; 
    }
    if (this.counter>0) {
      delete this.storage[this.counter]; 
      this.counter--;
    };

    console.log('storage: ', this.storage);
    
    this.storage[this.counter] = last;
    console.log("new first:", this.storage[1], "|last:", this.storage[this.counter]);
    return first;
  }

};
