function getSecondLargestValue(array) {
  array.sort();

  console.log("---------------------");

  let size = array.length;

  // Applying the bubble sort algorithm
  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("The Sorted array is :"+array);
  console.log("The 2nd largest value is :" + array[size - 2]);
  console.log("---------------------");
}

let arr = [2, 4, 1, 8, 5];
getSecondLargestValue(arr);
