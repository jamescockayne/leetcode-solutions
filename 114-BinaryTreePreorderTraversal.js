/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    let result = new Array()
    helper(root, result)
    return result
};

var helper = function(root, result){
    if (root !== null){
        result.push(root.val)
        helper(root.left, result)
        helper(root.right, result)
    }
    return
}