// Your code here
function mapToNegativize(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element * -1));
  return newArr;
}

function mapToNoChange(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element));
  return newArr;
}

