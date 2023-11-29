// singleton objects
// const tinderUser = new Object();

const tinderUser = {
    //
}
tinderUser.id = "1234"
tinderUser.user = "Sanita"
tinderUser.isLoggedIn = false

// console.log(tinderUser)  // output : { id: '1234', user: 'Sanita', isLoggedIn: false }



const registerUser = {
    email: "maanish98mdr@gmail.com",
    fullName: {
        userfullName:{
            firstName: "Manish",
            middleName: "",
            lastName: "Manandhar"
        }
    }
}
// console.log(registerUser.fullName.userfullName.firstName); // Output  Manish

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// combain the 2 object in 1 objects 
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);  //output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }