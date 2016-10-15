var test = require('tape');
var bubbleSort = require('./../challenges/challenge1');
var selectionSort = require('./../challenges/challenge2');
var mergeSort = require('./../challenges/challenge3');
var quickSort = require('./../challenges/challenge4');
var heapSort = require('./../challenges/challenge5');
var fibonacci = require('./../challenges/challenge6');

test('test bubblesort', function(t){
	t.deepEqual(bubbleSort([1,4,5,2,3]), [1,2,3,4,5]);
	t.end();
}); 

test('test selsectionsort', function(t){
	t.deepEqual(selectionSort([1,4,5,2,3]), [1,2,3,4,5]);
	t.end();
});

test('test mergesort', function(t){
	t.deepEqual(mergeSort([1,3,2,5,4]), [1,2,3,4,5]);
	t.end();
});

test('test quickSort', function(t){
	t.deepEqual(quickSort([1,3,2,5,4],0,4), [1,2,3,4,5]);
	t.end();
});
test('test heapSort', function(t){
	t.deepEqual(heapSort([1,3,2,5,4],0,4), [1,2,3,4,5]);
	t.end();
});
test('test fibonacci', function(t){
	t.equal(fibonacci(12), 144);
	t.end();
});