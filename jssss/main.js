// function batmen(...arrays) {
//     return [].concat(...arrays);
// }console.log(batmen([1, 2], [3, 4]));
// console.log(batmen([15, 4], [2, 3], [5, 7]));



// function asasin(arr,a) {
//     return arr.indexOf(a)
// }console.log( asasin([1, 2, 3], 2));
// console.log(asasin([3, 4, 5, 3, 1, 5, 5, 5, 7, 6], 5));


// function test(arr) {
//     let result = [];
//    arr.forEach((element,index) => {
//        if (arr.indexOf(element) === index) {
//         result.push(element)
//     }
//    });
//     return result;
// }
// console.log(test([1,2,3,4]));


// function test(arr) {
//     return arr.filter((e) => e > 0);
// }
//    console.log(test([-1,2,-3,4,-5]));

// function asasin(arr) {
//     let sum=arr.reduce((acc,asasa) => acc+asasa,0);
//     let asa=sum/arr.length;
//     return asa;
// }console.log(asasin([2,4,6,8]));
// console.log(asasin([1,4,6,9,10]));
// console.log(asasin([2,4]));


// function asasinus(a)
// {
//    if  (a.toReversed(a)){
//     return true
//    }
//    else {
//     return false 
//    }
// }console.log(asasinus([1, 2, 3, 2, 1]));


    // function asa(num1, num2, arr) {
    //     return arr.filter((number)=> number> num1 && number < num2);
    // }console.log(asa(1, 10, [1, 10, 25, 8, 11, 6]));
    // console.log( asa(3, 8, [1, 5, 95, 0, 4, 7])); 
 

    // Task9
// function typesss(arr){
//     return arr.map((type) => typeof type)
// }
// console.log(typesss([1, 2, "null", []]));
// console.log(typesss(["214", true, false, 2.15, [], null]));
// console.log(typesss([21.1, "float", "array", ["I’m array"], true, 214]));

//    function asa(a)
//    {
//     let sum = 0;
//     for (let i = 0; i <a.length;i++){
//         sum +=a[i]
//     } return sum
//    } console.log(asa([1,2,3,4,5]));
//    console.log(asa([-1,0,1]));
// Task13
// function multipleArray(arr){
//     return arr.map((multiple) => multiple*2 )
// }
// console.log(multipleArray([2, 5, 3]));


// function wordLengths(arr){
//     return arr.map((word) => word.length)
// }

// Task12
// function invertArray(arr){
//     return arr.map((num) => num *= -1)
// }
// console.log(invertArray([1, 2, 3, 4, 5]));


// function firstOne(arr){
//     return arr[0]
// }
// console.log(firstOne([1, 2, 3]));
// console.log(firstOne([80, 5, 100]));
// console.log(firstOne([-500, 0, 50]));

// function rev(arr){
//     return arr.toReversed(arr)
// }
// console.log(rev([1, 2, 3, 4]));
// console.log(rev([9, 9, 2, 2, 4]));
// console.log(rev([]));


// function concat(arr1,arr2){
    //     return arr1.concat(arr2)
    // }
    // console.log(concat([1, 3, 5], [2, 6, 8]));
    // console.log(concat([7, 8], [10, 9, 1, 1, 2]));


    // function asd(arr){
//     return arr.map((e)=>e+1)
//     }
// console.log(asd([0, 1, 2, 3]));


// function asd(a){
//  let arr = 0;
//  let app = 0;
//  a.forEach(element => {
//     if(element%2==0)
//         {
//         arr+=element;
//     }
//     else 
//     {
//       app+=element
//     }
// });
// return [arr,app]
// }console.log(asd([1,2,3,4,5,6]));


// function na1(params,ccc) {
//     let cnt= 0
// for(let i = 0; i<params.length;i+=ccc)
//     {
//         cnt+=params[i]
//     }
//     return cnt
// }  console.log(na1([1,2,3,4,5,6],2));

// function isPrime(num) {
//     if (num <= 1) return false; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true; 
// }
// function primeNumArray(arr) {
//     return arr.every(isPrime);
// }console.log(primeNumArray([19, 1])); 
// console.log(primeNumArray([5, 2])); 
// console.log(primeNumArray([6, 23])); 

// function randomNumArray(n, min, max) {
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//         result.push(randomNum);
//     }
//     return result;
// }console.log(randomNumArray(10, 1, 10));
// console.log(randomNumArray(5, 10, 100));
// console.log(randomNumArray(3, 1000, 1001)); 


