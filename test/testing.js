var test = require('tape');
var bubbleSort = require('./../challenges/challenge1');
var selectionSort = require('./../challenges/challenge2');

test('test bubblesort', function(t){
	t.deepEqual(bubbleSort([1,4,5,2,3]), [1,2,3,4,5]);
	t.end();
}); 

test('test selsectionsort', function(t){
	t.deepEqual(selectionSort([1,4,5,2,3]), [1,2,3,4,5]);
	t.end();
});

