// // for loops
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)
// }


// break and continue
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }


for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);
}