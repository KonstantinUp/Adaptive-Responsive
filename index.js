function Node(key, value) {
    this.key = key;
    this.value = value;

    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this._root = null;
}
// returns root of the tree;
BinarySearchTree.prototype.root = function () {
   return this._root && this._root.value;
};

var searchNodeToInsert = function (node, key) {
    if (key < node.key && node.left){
        return searchNodeToInsert(node.left, key);
    } else if (key > node.key && node.right){
        return searchNodeToInsert(node.right, key);
    } else if (key === node.key){
        return null;
    }
    return node;
};

// stores specified value in tree using key; method should be chainable;
BinarySearchTree.prototype.insert = function(key, value){
       if(!this._root){
           this._root = new Node(key, value);
       } else {
           var nodeToInsert = searchNodeToInsert(this._root, key);
           if (nodeToInsert){
               if (key < nodeToInsert.key) {
                   nodeToInsert.left = new Node(key, value);
               } else {
                   nodeToInsert.right = new Node(key, value);
               }
           }
       }
    return this;
};

var findMinimalInRightBranch = function (node, parentNode, key) {
    if (key < node.key && node.right){
        return findMinimalInRightBranch(node.left, node, key);
    } else if (key > node.key && node.right){
        return findMinimalInRightBranch(node.right, node, key);
    } else if (key === node.key){
        return null;
    }
    return {
        node: node,
        parentNode: parentNode,
    };
};

var findMinimalToReplaseDeleted = function(node){
    if (node.right){
        return findMinimalInRightBranch(node.right, node, node.key);
    }
    return {
        node: node.left,
        parentNode: node,
    };
};

// removes node from tree by provided key; method should be chainable;
BinarySearchTree.prototype.delete = function(key){
    var foundNode =  searchNodeByKey(this._root, null, key);

    if (!foundNode) {
        return this;
    }

    var foundNodeToReplaceDeleted = findMinimalToReplaseDeleted(foundNode.node);

    if (!foundNode.node.right && !foundNode.node.left){
        foundNode.parentNode.left = null;
        return this;
    }

    if (foundNode.parentNode &&
        !foundNodeToReplaceDeleted.node.right &&
        !foundNodeToReplaceDeleted.node.left){
        foundNode.parentNode.left = foundNodeToReplaceDeleted.node;
        return this;
    }

    foundNodeToReplaceDeleted.parentNode.left = null;
    foundNode.node.key = foundNodeToReplaceDeleted.node.key;
    foundNode.node.value = foundNodeToReplaceDeleted.node.value;
    return this;
};

var searchNodeByKey = function (node, parent, key) {
    if (key === node.key){
        return {
            node: node,
            parentNode: parent,
        };
    } else if (key < node.key && node.left){
        return searchNodeByKey(node.left, node, key);
    } else if (key > node.key && node.right){
        return searchNodeByKey(node.right, node, key);
    } else {
        return null;
    }
};

var searchNodeValue = function (node, key) {
    var result = searchNodeByKey(node, null, key);
    if (!result){
        return result;
    }
    return result.node.value;
};

// looking for stored data in tree using key;
BinarySearchTree.prototype.search = function(key){
    return searchNodeValue(this._root, key);
};

var searchNodeByValue = function (node, parent, value) {
    if (value === node.value){
        return {
            node: node,
            parentNode: parent,
        };
    } else if (value < node.value && node.left){
        return searchNodeByKey(node.left, node, value);
    } else if (value > node.value && node.right){
        return searchNodeByKey(node.right, node, value);
    } else {
        return null;
    }
};

// returns whether BST contains such value or not;
BinarySearchTree.prototype.contains = function(value){
    if (!this._root){
        return false;
    }

    var foundNode = searchNodeByValue(this._root, null, value);

    return !!foundNode;
};

// returns ordered sequence of stored values in given oreder (order is boolean)
BinarySearchTree.prototype.traverse = function(order){

};

// verifies whether tree is well-formed binary search tree or not
BinarySearchTree.prototype.verify = function(){

};

module.exports = {
  BinarySearchTree,

  //WARNING!!!
  //PROVIDE BST STRUCTURE FOR TESTS {STRING}
  root: '_root',
  left: 'left',
  right: 'right',
  //NAME FOR REPORTS
  student: 'STUDENT NAME'
};


