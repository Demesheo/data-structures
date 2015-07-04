var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var temped = Node(value);
    
    if (list.head === null) {
      list.head = temped;
    } ;

    if (list.tail){
      list.tail.next = temped;
    };

    list[value] = temped.value;
    list.tail = temped;

  };


// we want to add a node to our linkedlist
// if there is no head node (head === null), this value will also be the head node
// we do not want to create two nodes, if there is no head, we only want to create a reference
// on our first instance, we want to set our head node's next value to be our tail node
// we want to create a reference to this node so that the next node we add will be the former's next value

  list.removeHead = function(){
    // console.log("head to be removed: ", list.head);
    var oldHead = list.head.value;
    // console.log('list head value: ', list.head.value);

    list.head = list.head.next;
    // console.log('list head next: ', list.head)
    delete list[oldHead];
    return oldHead;

  };

  list.contains = function(target){
    if(list[target]){
      return true;
    } else {return false}


  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
