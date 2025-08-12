/**
 * mergeSort - returns a new sorted array using the Merge Sort algorithm
 * (stable O(n log n) divide & conquer sorting)
 * @param {Array<number>} arr input array of numbers
 * @returns {Array<number>} new sorted array (ascending)
 */
export const mergeSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("mergeSort expects an array");
  }
  const n = arr.length;
  if (n <= 1) return arr.slice(); // return copy

  const mid = Math.floor(n / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

/**
 * Merge two sorted arrays into one sorted (stable)
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>}
 */
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  return result;
}
