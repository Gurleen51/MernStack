//settimeout // async

console.log("start");
setTimeout(()=>{
    console.log("time consuming task");
},2000);
console.log("end")

//setinterval
console.log("start");
let num = setInterval(() =>{
    console.log("set interval ala function");
},3000)
console.log("end");

setTimeout(() =>{
    console.log("timeout");
    clearInterval(num);
},8000)

//callbacks
const getData = (callback) =>
    setTimeout(() =>{
        console.log("there are dataaaaaa");
        callback("data recieved");
},2000)

getData((msg) => {
    console.log("test", msg);
})
console.log("end");

//promises

const promise = new Promise((resolve,reject) =>{
    let success = true;
    setTimeout(() =>{
        success ? resolve("promise resolved") : reject("promise rejected");
    },3000);
});
promise.then((res) => {
    console.log(res);
})
.catch((err) => console.log(err))
.finally(() => console.log("done"))

//ques promises

const MyPromise = () =>{
    const promise = new Promise((resolve,reject) =>{
    let success = true;
    setTimeout(() =>{
        success ? resolve("registered successfully") : reject("something wemt wrong");
    },3000);
})
return promise;
};
const signupFunction = async() =>{
    try{
        const data = await MyPromise();
        console.log(data);}
catch(err){
    console.log("test", err);
}}

signupFunction();