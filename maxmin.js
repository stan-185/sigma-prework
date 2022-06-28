function maxMin(arr) {
  let [min, max] = [arr[0], arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}

let numbers = prompt("Enter numbers separated by a comma").split(",");

//Convert string array to number array
numbers.forEach((ele, i, a) => (a[i] = Number(ele)));

console.log(
  `Minimum value: ${maxMin(numbers)[0]}\nMaximum value: ${maxMin(numbers)[1]}`
);
