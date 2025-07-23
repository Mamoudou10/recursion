function fibs(n) {
    const result = [];

    for(let i = 0; i < n; i++) {
        if (i === 0) {
            result.push(0);
        } else if (i === 1) {
            result.push(1);
        } else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }
    return result;
}

console.log(fibs(8));

// Recursive version
function fibsRec(n) {
  console.log("This was printed recursively"); // To visualize recursion

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1); // Recursive call
  const nextNumber = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, nextNumber];
}

  
  // Test both versions
  console.log("Iterative:");
  console.log(fibs(0)); // []
  console.log(fibs(1)); // [0]
  console.log(fibs(5)); // [0, 1, 1, 2, 3]
  console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
  
  console.log("\nRecursive:");
  console.log(fibsRec(0)); // []
  console.log(fibsRec(1)); // [0]
  console.log(fibsRec(5)); // [0, 1, 1, 2, 3]
  console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

  function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case
  
    const mid = Math.floor(arr.length / 2); // Find the middle
    const left = mergeSort(arr.slice(0, mid)); // Sort left half
    const right = mergeSort(arr.slice(mid));  // Sort right half
  
    return merge(left, right); // Merge sorted halves
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
  
    // Compare elements from both arrays and push the smaller one
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Add remaining elements if any
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // 🔍 Test cases
  console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
  console.log(mergeSort([105, 79, 100, 110]));       // [79, 100, 105, 110]
  