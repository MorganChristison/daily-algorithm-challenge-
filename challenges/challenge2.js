// Selection Sort
//how does it works: This is very simple. Go through the array, find the index of 
// the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.

// thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.
function selectionSort(arr) {
  var minIdx, temp, 
      len = arr.length;
  for(var i = 0; i < len; i++) {
    minIdx = i;
    for(var  j = i+1; j<len; j++) {
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
module.exports = selectionSort;