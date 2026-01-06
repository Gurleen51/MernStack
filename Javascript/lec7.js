// closure

const outerFunction = () => {
    let counter = 0;
    const innerFunction = () =>{
    counter++;
    console.log(counter);
}
return innerFunction;
}
const myclosure = outerFunction();
myclosure();
myclosure();

//real life example

const generateAccount = (initial_balance) =>{
    let amount = initial_balance;
    return {
        withdrawl: (amt) =>{
            if (amt <= amount){
                amount -= amt;
                console.log("withdrawl amount:", amt);
                console.log("available balance:", amount);
            }else {
                console.log("insuffecient balance");
            }
        },
        deposit: (amt) =>{
            amount += amt;
            console.log("updated amount:",amount);
        }
    }
}
const bankAccount = generateAccount(1000);
console.log(bankAccount);
bankAccount.withdrawl(500);
bankAccount.deposit(30000);

//hoisting
console.log(a);
var a; // uplift the var and assign it undefined but in case of let it gives reference error