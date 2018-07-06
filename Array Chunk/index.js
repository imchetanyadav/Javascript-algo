// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
// function chunk(array, size) {
//   const newArray = [];
//   let chunks = [];
//   for (var i = 0; i < array.length; i++) {
//     chunks.push(array[i]);
//     if((i+1) % size === 0){
//       newArray.push(chunks);
//       chunks = [];
//     }
//   }
//   if (chunks.length > 0)
//     newArray.push(chunks);
//   return newArray;
// }

// Solution 2
// function chunk(array, size) {
//   const chunked = [];

//   for(let element of array) {
//     const last = chunked[chunked.length -1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// Solution 3
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while(index < array.length) {
    chunked.push(array.slice(index, index+size));
    index = index+size;
  }
  return chunked;
}

module.exports = chunk;