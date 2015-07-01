var Queue = function(){
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    size++;
    storage[size] = value;
    // console.log('add: ', storage[size] )
  };

  someInstance.dequeue = function(){
    var popped = storage[1];
    var last = storage[size];
    // console.log("before deq:", storage);
    delete storage[size];
    if (size > 0) {
      size--;
    }
    for (var key in storage) {
      storage[key] = storage[1 + key];
    }
    storage[size] = last;
    // console.log("after deq:", storage);
    return popped;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
