const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter the valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter the valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = ` <span>${bmi}</span><br>Under Weight, Let's go to resturant`;
    } else if (18.6 < bmi || bmi > 24.9) {
      results.innerHTML = ` <span>${bmi}</span><br>Normal range weight`;
    } else if (24.9 < bmi) {
      results.innerHTML = ` <span>${bmi}</span><br>Opps! Over Weight, Let's go for the Gym`;
    }
  }
});
