// const user = {
//     username : "manish",
//     price : 999,
    
//     welcomeMessage:function(){
//         console.log(`${this.username}, Weclcome to website`)
//     }
// }
// user.welcomeMessage()


// arrow function declearation 

// const userinfo = function (){
//     let username ="manish"
//     console.log(this.username);
// }

const userinfo = () => {
    let username = "Manish"
    console.log(this);
}
userinfo()