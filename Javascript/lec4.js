// ques
let arr= ["hey","!", "gur", "wyd"];

function concatention(arr)
{   let sum = " ";
    for(str of arr)
    {
        sum += str + " ";
    }
    console.log(sum);
        }
  concatention(arr);
    


    //higher order func
function multiplegreet(func,n)
{
    for(i=1; i<=n; i++)
    {
        func();
    }
}
let greet = function(){
    console.log("hello");
}
multiplegreet(greet, 3);

//ques 
function oddoreven(req){
    if (req=== "odd" || "even")
        {
        return function (n)
        {
            console.log(n);
            if(n && n % 2!==0 && req==="odd")
                {
                console.log("yes it is odd");
            }
           else if(n && n % 2==0 && req==="even")
            {
                console.log("yes it is even");
            }
            else{
                console.log("wrong request");
            }
        }
    }
}
const shibu = oddoreven("even");
shibu(4);

//dict
const student ={
    name: "shibu",
    branch: "architecture",
    vill: "shimlapuri",
    height: 5.6,
}
console.log(student.vill);

// try and catch

const test =()=>{
    try{
        const a = 99;
        console.log(b); 
    }
    catch (err){
        console.log("not valid");
    }
    finally{
        console.log("will be running always");
    }
}
test();