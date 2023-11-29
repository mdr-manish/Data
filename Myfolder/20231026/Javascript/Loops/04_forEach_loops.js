// For each loops
const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//     console.log(item);
// } )

// coding.forEach((item, index, arr) =>{
//     console.log(item, index, arr)
// } )

// const values = coding.forEach((item) => {
//     return item;
// })
// console.log(values) //output undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 4)
console.log(newNums)