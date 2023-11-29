//　all buttons select from html
const buttons = document.querySelectorAll(".button");
// select the body of HTML
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {

    /* if and else case  */

    // // for red background color
    // if (event.target.id === "red") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // // for grey background color
    // if (event.target.id === "gray") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // // for blue background color
    // if (event.target.id === "blue") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // // for green backgroun color
    // if (event.target.id === "green") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // // for yellow backgroun colo
    // if (event.target.id === "yellow") {
    //   body.style.backgroundColor = event.target.id;
    // }
    // // for pink backgroun colo
    // if (event.target.id === "pink") {
    //   body.style.backgroundColor = event.target.id;
    // }

        /* in switch case  */
    switch (event.target.id) {
        // for red background color
        case ("red"):
            body.style.backgroundColor = event.target.id;
            break;
        // for gray background color
        case ("gray"):
            body.style.backgroundColor = event.target.id;
            break;
        // for blue background color
        case ("blue"):
            body.style.backgroundColor = event.target.id;
            break;
        // for green background color
        case ("green"):
            body.style.backgroundColor = event.target.id;
            break;
        // for yello background color
        case ("yellow"):
            body.style.backgroundColor = event.target.id;
            break;
        // for pink background color
        case ("pink"):
            body.style.backgroundColor = event.target.id;
            break;
        default:
            break;
    }
  });
});
