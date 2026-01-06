//loops with arrays
let fruits = ["mango" , " watermelon", "banana", "apple"];

for (i=0; i<fruits.length; i++)
{
    console.log(i, fruits[3]);
}

//loops with arrays 2
let heroes =[["iron man", "flash", "hawkeye"] ,["batman","deadpool", "rhino"]];
for(let i=0; i<heroes.length; i++)
{
    for(let j=0; j<heroes[i].length; j++)
       { 
        console.log(heroes[i][j]);
       }
}

//for of loops

let phones =["apple", "samsung", "vivo", "oppo", "redmi"];
 for(phone of phones){
    console.log("samsung");
 }

 //objects

 const data = {
    name: "jaska",
    age: 18,
    class: +2,
    roll: 23,

 };
console.log(data.age)

//quest.

const thread ={
    username: "henry cavil",
    content: "actor and producer",
    likes: 2500000,
    reposts: 3,
    tags: ["ben affleck","gal gadot","jack snyder"],
};
console.log(thread.likes)

// maths

const num = Math.random() * 100;
{
 console.log(num);
 console.log(Math.ceil(num));
 console.log(Math.floor(num));
}

//functions

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num*i);
    }
}
multiplicationTable(5);//fucntion call