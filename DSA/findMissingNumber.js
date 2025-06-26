let arr = [1, 2, 3, 4, 5, 7];

function missingNumber(arr) {
  let sumOfArray = 0;
  let n = arr.length;
  let sumOfNumbers = ((n + 1) * (n + 2)) / 2;
  for (let i = 0; i < n; i++) {
    sumOfArray += arr[i];
  }
  return sumOfNumbers - sumOfArray;
}
console.log(missingNumber(arr));
