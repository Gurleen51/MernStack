// STRING -- SEQUENCE OF CHARACTERS

const name = "Harman";

console.log(typeof name);
console.log(name.lenght);
console.log(name[0]);
console.log(name[5]);

console.log(Object.getOwnPropertyNames(String.prototype));

const name1 = "";
console.log(name1.lenght);

// literals

const data = 30;
const data1 = 40;
console.log("you have to pay", data + data1);
console.log(`you have to pay ${data + data1}`);

console.log("40"==40);
console.log("40"===40); //caursion
console.log(NaN == NaN);

let light="green";  //TRAFFIC LIGHT SYSTEM -- if-else

if(light == "red"){
    console.log("STOP");
}
if (light == "yellow"){
    console.log("READY");
}
else{
    console.log("GO");
}

let size = "S"; // POPCORN PRICES -- elseif

if(size == "XL"){
    console.log("Price : 250");
}
else if(size == "L")
{
    console.log("Price : 200");
}
else if(size == "M")
{
    console.log("Price : 100");
}
else if(size == "S")
{
    console.log("Price : 50");
}
else{
   console.log("SORRY!!");
}

let name3="animal";
 if( name3[0] === 'a' && name3.length > 3 )
    {
    console.log("Good String");
 }
 else{
    console.log("Bad String");
 }