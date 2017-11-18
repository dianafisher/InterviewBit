/* subtract.js

Given a singly linked list, modify the value of first half nodes such that :

1st node’s new value = the last node’s value - first node’s current value
2nd node’s new value = the second last node’s value - 2nd node’s current value,
and so on …

NOTE :
If the length L of linked list is odd, then the first half implies at first floor(L/2) nodes.
So, if L = 5, the first half refers to first 2 nodes.

If the length L of linked list is even, then the first half implies at first L/2 nodes.
So, if L = 4, the first half refers to first 2 nodes.

Example :

Given linked list 1 -> 2 -> 3 -> 4 -> 5,

You should return 4 -> 2 -> 3 -> 4 -> 5
as

for first node, 5 - 1 = 4
for second node, 4 - 2 = 2

*/


// Definition for singly-linked list.
//      function Node(data){
//        this.data = data
//        this.next = null
//      }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  subtract : function(A){

    if (A == null || A.next == null) {
      return A;
    }

    // split the list in half by using two pointers, one moving twice as fast as the other.
    var fast = A;
    var slow = A;
    var mid = A;

    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      mid = slow;
      slow = slow.next;
    }

    // console.log('slow');
    // this.printList(slow);

    // drop the second half of the list from mid
    mid.next = null;

    // reverse the 'slow' list
    var prev = null;
    var current = slow;
    while (current != null) {
      var temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }

    var reversed = prev;  // temp is now the second half of the list, reversed.
    current = A;  // current points to the first half of this list
    var temp = reversed;

    // console.log('temp');
    // this.printList(temp);

    // console.log('reversed');
    // this.printList(reversed);

    // console.log('current');
    // this.printList(current);

    // perform the subtraction
    while (current != null) {
      current.data = temp.data - current.data;
      current = current.next;
      temp = temp.next;
    }


    // console.log('reversed');
    // this.printList(reversed);

    // reverse the reversed list to return it to the original order
    current = reversed;
    prev = null;
    while (current != null) {
      temp = current.next;
      current.next = prev;
      prev = current
      current = temp;
    }

    // console.log('prev');
    // this.printList(prev);

    // append the resulting list to the middle node
    mid.next = prev;


    return A;
  },

  printList: function(A) {
    var current = A;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
};


function Node(data) {
  this.data = data;
  this.next = null;
}

// A: 95 -> 59 -> 26 -> 16 -> 31 -> 39 -> 29 -> 8 -> 74 -> 14 -> 41 -> 41 -> 64 -> 88 -> 34 -> 21 -> 67 -> 23 -> 17 -> 41 -> 3 -> 38 -> 4 -> 45 -> 93 -> 92 -> 99 -> 24
var values = [59, 26, 16, 31, 39, 29, 8, 74, 14, 41, 41, 64, 88, 34, 21, 67, 23, 17, 41, 3, 38, 4, 45, 93, 92, 99, 24];

var A = new Node(95);
var current = A;
values.forEach(function(elem) {
  current.next = new Node(elem);
  current = current.next;
});

var B = module.exports.subtract(A);
console.log('RESULT::::')
module.exports.printList(B);
// expected: -71 -> 40 -> 66 -> 77 -> 14 -> -35 -> 9 -> -5 -> -33 -> 3 -> -18 -> 26 -> -43 -> -54 -> 34 -> 21 -> 67 -> 23 -> 17 -> 41 -> 3 -> 38 -> 4 -> 45 -> 93 -> 92 -> 99 -> 24