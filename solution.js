/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    /**
      Facts
            1. Critical Point current node > next && current node > previous OR < !!
            2. ONLY MIN/MAX if before and after (first node cannot be anything)
            3. Origin node is counted as one when getting min / max DISTANCE
            4. if fewer than 2 critical points [-1, -1]

        Requirements
            1. minDistance, maxDistance of critical points (ALL)

     */

     let prev = head;
     let current = head.next;
     let minDis = Infinity;
     let critical_points = [];
     let index = 1;

     while(current.next) {
         if((current.val > prev.val && current.val > current.next.val) || (current.val < prev.val && current.val < current.next.val)) {
             if(critical_points.length) {
                 minDis = index - critical_points[critical_points.length - 1] < minDis ? index - critical_points[critical_points.length - 1] : minDis;
             }
             critical_points.push(index);
         };

         prev = current;
         current = current.next;
         index++;
     }

    if(critical_points.length < 2) return [-1, -1];
    return [minDis, critical_points[critical_points.length - 1] - critical_points[0]];

};
