function BinarySearchTree(data, parent) {
    this.data = data;
    this.parent = parent;
}

BinarySearchTree.prototype = {
    insert: function(data) {
    	// Inserts 'data' into the binary search tree.
        // Recurse until there is an empty space to insert the new data into.
        if (typeof this.data === "undefined") {
            this.data = data;
        }
        else if (data < this.data) {
            if (this.left) {
            	// If we have a left node recurse and insert into that.
                this.left.insert(data);
            }
            else {
            	// Otherwise add a new node as the left child.
                this.left = new BinarySearchTree(data, this);
            }
        }
        else if (data > this.data) {
            if (this.right) {
            	// If we have a right node recurse and insert into that.
                this.right.insert(data);
            }
            else {
            	// Otherwise add a new node as the right child.
                this.right = new BinarySearchTree(data, this);
            }
        }
    },
    findMin: function() {
        // Find the minimum node in this tree, by finding the leftmost node.
        var min = this;
        while (min.left) {
            min = min.left;
        }
        return min;
    },
    replaceInParent: function(newNode) {
        if (this.parent) {
        	// Replace whichever child this node is of its parent with 'newNode'.
            if (this.parent.left === this) {
                this.parent.left = newNode;
            }
            else if (this.parent.right === this) {
                this.parent.right = newNode;
            }
        }
        else {
            // This is the root node, replace ourselves with 'newNode'.
            this.data = newNode? newNode.data : undefined;
            this.right = newNode? newNode.right : undefined;
            this.left = newNode? newNode.left : undefined;
        }
        // Set the parent of the newNode correctly.
        if (newNode) {
            newNode.parent = this.parent;
        }
    },
    find: function(data) {
        // Finds 'data' in the tree and returns the node that contains data,
        // or 'undefined' if data doesn't exist.
        var foundNode = undefined;
        if (data < this.data && this.left) {
            foundNode = this.left.find(data);
        }
        else if (data > this.data && this.right) {
            foundNode = this.right.find(data);
        }
        else if (data === this.data) {
            foundNode = this;
        }
        return foundNode;
    },
    remove: function(data) {
    	// Removes 'data' from the tree.
        var foundNode = this.find(data);
        if (foundNode) {
            if (foundNode.left && foundNode.right) {
                // If 'foundNode' has both left and right children.
                // Find the minimum value on the right.
                // ie. the minimum value greater than 'foundNode'.
                var rightMin = foundNode.right.findMin();
                // Replace 'foundNode' data with the 'rightMin' data.
                foundNode.data = rightMin.data;
                // Replace 'rightMin' with its right child (or 'undefined').
                // Guaranteed no left child as 'rightMin' is a minimum.
                rightMin.replaceInParent(rightMin.right);
            }
            else {
                // Replace 'foundNode' by whichever child it has, left or right.
                // Or 'undefined' if 'foundNode' has no children.
                foundNode.replaceInParent(foundNode.left || foundNode.right);
            }
        }
    }
}