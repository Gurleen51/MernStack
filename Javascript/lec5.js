// arrow function

const sue =(a,b) => a+b;
console.log(sue(5,7));

const mul = (c,d) => {
    return c*d;
}
console.log(mul(2,3));

//ques
const exp = (n,m) => {
    return n**m;
}
console.log(exp(2,3));  
// array methods:
// for each:
// map:
// filter:
// reduce:
// some:
// find:
// every:

// for each 
 const arr = ["a","b", "c", "d", "e"];

 const res = arr.forEach((item , index) => {
    console.log(item, index);
    return 1;
 })
 console.log(res);

 //map

 const arr1= ["1","2","3","4","5"];
 const res1 = arr1.map((item , index) =>{
    console.log(item,index);
    return item ;
 })
 console.log(res1);

 //filter
 const res2 = arr1.filter((item) =>{
    return item % 2===0;
 })
 console.log(res2);
 
//reduce
const arr2 =[1,2,3,4,5,6];
const sum = arr2.reduce((acc , item) => {
    return acc + item;
})
console.log(sum);

//find

const arr3 = [2,3,4,5,6];
const res3 = arr3.find((item) => {
    return item % 2===0;
})
console.log(res3);

//ques
let arr4 = [
    {
        name: "gur",
        marks: 95,
    },
    {
        name: "karan",
        marks: 87,
    },
    {
        name: "dhilli",
        marks:90,
    },
]
arr4.forEach((student) =>{
    console.log(student.marks);
})

// reduce ques

let nums = [3,6,5,7,8,8,9,7];

let result = nums.reduce( (max,el)=> {
    if(el>max) {
        return el;
    }
    else {
        return max;
    }
})
console.log(result);

//find multiple of 10 

const arr5 = [10,20,30,40,50];
const res4 = arr5.every((item) => {
    return item % 10 ===0;
},Infinity)
console.log(res4);