// let arr = new Array();
// //let arr = [];
//
// let fruits = ['Apple','Orange','Plum'];
// alert(fruits[0]);
// alert(fruits[1]);
// alert(fruits[2]);
// fruits[2] = 'Pear';
// fruits[3] = 'Lemon';
// alert(fruits);

// function getMaxSubSum(arr){
//     const n = arr.length;
//     const dp = new Array(n);
//     dp[0] = arr[0];
//     maxSum = dp[0];
//
//     for(let i =1; i<n; i++){
//         dp[i] = Math.max(arr[i],dp[i-1]+arr[i]);
//         maxSum = Math.max(maxSum,dp[i]);
//     }
//     return Math.max(maxSum,0);
//
// }

let arr = [1,2];
//arr.forEach(function(item,index,array){});
arr.forEach((item,index,array) => {
    alert(`${item} is at index ${index} in ${array}`);
});
