function getSecondLargestValue(array) {
  array.sort();

  console.log("---------------------");

  console.log("The Sorted array is :");

  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
  console.log("The 2nd largest value is :" + array[1]);
  console.log("---------------------");
}

let arr = [2, 4, 1, 8,5];
getSecondLargestValue(arr);
