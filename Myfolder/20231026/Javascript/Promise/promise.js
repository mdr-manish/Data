// promise create
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    // console.log('Async task is complete')
    resolve();
  }, 1000);
});

// promise Consume
// .then() is related to resolve
promiseOne.then(function () {
  // console.log('Promise consumed')
});

// Promise 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log('Async task 2')
    resolve();
  }, 1000);
}).then(function () {
  "";
  // console.log('Async 2 resolved');
});

// Promise 3→Data Consumtion
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "manish", email: "some@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Promise 4→
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Manish", password: "123" });
    } else {
      reject("Error : something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is either resolved or reject");
  });

// Promise 5→
const promiseFive = new Promise(function (resolve, reject) {
  let error = true;
  if (!error) {
    resolve({ name: "Javascript", password: "123" });
  } else {
    reject("Error: Javascript went wrong");
  }
}, 1000);

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive();

// using api calling in try and catch method
async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')  //api set in response variable
        const data = await response.json()    // api return in string so wrap in the json format
        console.log(data)
    } catch (error) {
        console.log("E: ",error);
    }
}


// using api calling Promise Method
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
