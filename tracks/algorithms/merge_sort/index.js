function mergeSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and merge in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Add remaining elements from right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Export the function for use in other modules
module.exports = mergeSort;

// Example usage
if (require.main === module) {
  // Example test array with unsorted numbers to demonstrate merge sort
  const testArray = [64, 34, 25, 12, 22, 11, 90];
  console.log('Original array:', testArray);
  console.log('Sorted array:', mergeSort(testArray));
}
