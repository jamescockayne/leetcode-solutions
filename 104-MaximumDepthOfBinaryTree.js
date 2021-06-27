/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    let depth = 0
    return helper(root, depth)
};

const helper = (root, depth) => {
    if (root !== null){
        let myDepth = depth + 1
        let leftDepth = helper(root.left, myDepth)
        let rightDepth = helper(root.right, myDepth)
        return (leftDepth >= rightDepth) ? leftDepth : rightDepth
    } else {return depth}
}