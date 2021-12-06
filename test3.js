// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  let sum = 0;
  let sum1 = 0;
  let boo = ["false", "true"];

  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    sum1 += arr2[i];
  }
  if(sum1>sum ?? sum1 < sum)
    return boo;

}

console.log(result(arr1, arr2));
