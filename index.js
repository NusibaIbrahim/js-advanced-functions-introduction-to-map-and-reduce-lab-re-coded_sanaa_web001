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

function mapToDouble(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element * 2));
  return newArr;
}

function mapToSquare(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element * element));
  return newArr;
}


