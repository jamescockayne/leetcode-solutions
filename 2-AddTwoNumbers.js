/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

 Definition for singly-linked list.
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
 }


  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    const equalise = (list1, list2) => {
        console.log(list1, list2)
        if (l1==null){l1 = new ListNode(0, null)}
        if (l2==null){l2 = new ListNode(0, null)}
        while (true){
            if (list2.next == null && list1.next == null){break}
            if (list1.next == null){list1.next = new ListNode(0, null)}
            if (list2.next == null){list2.next = new ListNode(0, null)}
            list1 = list1.next
            list2 = list2.next
        }
    }
    
    const append = (head, newNodeVal) => {
        while (head.next != null){
            head = head.next
        }        
        let newNode = new ListNode(newNodeVal, null)
        head.next = newNode
        return
    }
    
    equalise(l1, l2)
    console.log(l1, l2)
    let carry = 0
    let digit = 0
    let current = new ListNode()
    
    while (true){
        digit = l1.val + l2.val + carry
        if (digit > 9){
            digit -= 10
            carry = 1;
        } else {carry = 0}
        append(current, digit)
        if (l1.next == null && l2.next == null){break}
        l1 = l1.next
        l2 = l2.next
    }
    
    if (carry){append(current, 1)}
    
    return current.next

};