// const myNum = [1,2,3,4,5]

// const myTotal = myNum.reduce(function (acc,curvalue) {
//     console.log(`acc : ${acc} and currvalue : ${curvalue}`);
//     return acc + curvalue
// }, 0)

// console.log(myTotal)

const shoppingCart =[
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) =>acc + item.price,0 );
console.log(totalPrice)



