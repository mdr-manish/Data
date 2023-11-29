// If statement
// < , >, <=, >=, ==, !=, ===
// false values → fales, 0, -0, BigInt 0n, "", null, undefined, NaN
// true values → "0", 'false', " ", [], {}, function(){}

// const temperature = 41
// if (temperature <= 40){
//     console.log("Temperature is less than 50")
// } else{
//     console.log("Temperature is gerater than 50.")
// }

// nested if-else statement
// const balance = 1000
// if (balance <  500) {
//     console.log("balance is less than 500")
// } else if (balance <  750) {
//     console.log("balance is less than 750")
// } else if (balance <  950) {
//     console.log("balance is less than 950")
// } else {
//     console.log("balance is less than 1200")
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course.");
// }

// if (loggedInFromGoogle || loggedInFromEmail){
//     console.log("User logged in");
// }


// const month = "Dec"

// switch (month) {
//     case "Jan" :
//         console.log("January")
//         break;
//     case "Feb" :
//         console.log("February")
//         break;
//     case  "Mar" :
//         console.log("March")
//         break;
//     case "Apr" :
//         console.log("April")
//         break;
//     case "May" :
//         console.log("May")
//         break;
//     case "June" :
//         console.log("June")
//         break;
//     case "July" :
//         console.log("July")
//         break;
//     case "Aug" :
//         console.log("Auguest")
//         break;
//     case "Sep" :
//         console.log("Septmber")
//         break;
//     case "Oct" :
//         console.log("October")
//         break;
//     case "Nov" :
//         console.log("November")
//         break;
//     case "Dec" :
//         console.log("December")
//         break;
//     default:
 
//         break;
// }


// const userEmail = "m_manish@jobtkk.co.jp"

// if(userEmail){
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }



// ++++++++++++ Nullish Coalescing Operator(??) : null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// console.log(val1);


// ++++++++++++ Terniary Operator
const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
