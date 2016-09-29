//quick sort
// Step-1: You have to pick a pivot. This could be randomly selected 
// or the middle one. Here we select the last element of the array.

// Step-2: Put all the items smaller than the pivot value to the left 
// and larger than the pivot value to the right.

// Step-3:Repeat the step-2 for both left and right side of the pivot 
// (pick a pivot, put all item smaller than the pivot to the left and larger on the right)

function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}
        

function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}
        

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
module.exports = quickSort;