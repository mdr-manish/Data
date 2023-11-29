// Object literals
const jsUser ={
    name : "Manish",
    age: 19,
    location : "Hasuda",
    email : "m_manish@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Saturday"]
}

// how to access the objects in Javascript
// console.log(jsUser["email"])
// console.log(jsUser.email)

// objects value override in the javascript
// previous email value = "m_manish@gmail.com"
// jsUser.email = "m_manish@jobtkk.co.jp"
// console.log(jsUser["email"])

// function decleartion 
jsUser.greeting = function () {
    console.log(`Hello JS user, ${this.name}`)
}

// called functions
console.log(jsUser.greeting())