// arr = [1,3,5,6,9,10,13];
// target = 0;
// for(i = 0; i < arr.length -1; i++){
//     if((arr[i] <= target && arr[i+1] >= target) || arr.length-1 < target || arr[0]>target){
//         if(arr[i]==target){
//             console.log(i,"1");
//             break;
//         }else if(arr[i+1]==target){
//             console.log(i+1,"2");
//             break;
//         }
//         else if(arr.length <target){
//             console.log(arr.length ,"4");
//             break;
//         }
//         else if(arr[i] >target){
//             console.log(0,"5");
//             break;
//         }else if(arr[i] <= target && arr[i+1] >= target){
//             console.log(i+1,"5");
//             break;
//         }
//     }

// }

// let str = "javascript is a fun";

// let arr = str.split("");

// for (let i = 0; i < arr.length; ) {
//   if (arr[i] != " ") {
//     arr[i] = arr[i].toLocaleUpperCase();
//     i += 2;
//   } else {
//     i++;
//   }
// }
// arr = arr.toLocaleString();
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

let digits = [9,9,9,9]
let i = 0;
let sum = 0;
while (digits.length > i) {
  sum = sum * 10 + digits[i];
  i++;
}
sum = sum + 1;
len = digits.length - 1;

digits = sum.toString().split("").map(Number);

console.log(digits);
