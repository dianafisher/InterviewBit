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

  }
};
