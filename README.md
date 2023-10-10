# Find the Minimum and Maximum Number of Nodes Between Critical Points

## Description
This is the README for the "Find the Minimum and Maximum Number of Nodes Between Critical Points" problem, which is classified as a medium-level problem.

**Problem Statement:** Given a linked list `head`, your task is to find the minimum and maximum distances between any two distinct critical points in the linked list. A critical point in the linked list is defined as either a local maxima or a local minima.

### Definitions
- A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.
- A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.
- A node can only be a local maxima or minima if there exists both a previous node and a next node.

### Example
Here are some examples to illustrate the problem:
```
Example 1:
Input: head = [3,1]
Output: [-1,-1]
Explanation: There are no critical points in [3,1].

Example 2:
Input: head = [5,3,1,2,5,1,2]
Output: [1,3]
Explanation: There are three critical points:
- [5,3,1,2,5,1,2]: The third node is a local minima because 1 is less than 3 and 2.
- [5,3,1,2,5,1,2]: The fifth node is a local maxima because 5 is greater than 2 and 1.
- [5,3,1,2,5,1,2]: The sixth node is a local minima because 1 is less than 5 and 2.
The minimum distance is between the fifth and the sixth node. minDistance = 6 - 5 = 1.
The maximum distance is between the third and the sixth node. maxDistance = 6 - 3 = 3.

Example 3:
Input: head = [1,3,2,2,3,2,2,2,7]
Output: [3,3]
Explanation: There are two critical points:
- [1,3,2,2,3,2,2,2,7]: The second node is a local maxima because 3 is greater than 1 and 2.
- [1,3,2,2,3,2,2,2,7]: The fifth node is a local maxima because 3 is greater than 2 and 2.
Both the minimum and maximum distances are between the second and the fifth node. Thus, minDistance and maxDistance is 5 - 2 = 3.
Note that the last node is not considered a local maxima because it does not have a next node.
```

### Constraints
- The number of nodes in the list is in the range [2, 105].
- Each node's value is in the range of 1 to 105.

## Implementation
You can implement the solution for this problem using a programming language of your choice. The input is given as the head of a linked list, and you should return an array of length 2 containing `[minDistance, maxDistance]`.

## Companies
This problem may be relevant to technical interviews at various companies, where algorithmic problem-solving skills are assessed.

## Usage
Feel free to use this problem statement and examples in your technical interviews or coding practice. You can also contribute to this repository by providing your own implementations in different programming languages.

## License
This problem statement and examples are provided under the [MIT License](LICENSE).
