const str = "55.76, 56.01, 56.11, 55.88, 55.99; 49.10, 50.23, 48.98, 51.45, 50.55";
const arr = str.split("; ");
const nums = arr.map(subStr => {
  const subArr = subStr.split(", ");
  return subArr.map(number => parseFloat(number));
});
console.log(nums);