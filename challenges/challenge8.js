function BinarySearchTree(data, parent) {
    this.data = data;
    this.parent = parent;
}

BinarySearchTree.prototype = {
    insert: function(data) {
        if (typeof this.data === "undefined") {
            this.data = data;
        }
        else if (data < this.data) {
            if (this.left) {
                this.left.insert(data);
            }
            else {
                this.left = new BinarySearchTree(data, this);
            }
        }
        else if (data > this.data) {
            if (this.right) {
                this.right.insert(data);
            }
            else {
                this.right = new BinarySearchTree(data, this);
            }
        }
    },
    findMin: function() {
        var min = this;
        while (min.left) {
            min = min.left;
        }
        return min;
    },
    replaceInParent: function(newNode) {
        if (this.parent) {
            if (this.parent.left === this) {
                this.parent.left = newNode;
            }
            else if (this.parent.right === this) {
                this.parent.right = newNode;
            }
        }
        else {
            this.data = newNode? newNode.data : undefined;
            this.right = newNode? newNode.right : undefined;
            this.left = newNode? newNode.left : undefined;
        }
        if (newNode) {
            newNode.parent = this.parent;
        }
    },
    find: function(data) {
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
        var foundNode = this.find(data);
        if (foundNode) {
            if (foundNode.left && foundNode.right) {
                var rightMin = foundNode.right.findMin();
                foundNode.data = rightMin.data;
                rightMin.replaceInParent(rightMin.right);
            }
            else {
                foundNode.replaceInParent(foundNode.left || foundNode.right);
            }
        }
    }
}