
//----PROBLEM-----

// Q#  The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

//-----SOLUTION-----

// a. Store a Celsius temperature into a variable
// let celsius = 25;

// // b. Convert it to Fahrenheit and output
// let fahrenheitFromCelsius = (celsius * 9 / 5) + 32;
// document.getElementById("celsiusToFahrenheit").textContent =
//  `Fahrenheit: ${celsius}°C is ${fahrenheitFromCelsius}°F`;

// // c. Now store a Fahrenheit temperature into a variable
// let fahrenheit = 70;

// // d. Convert it to Celsius and output
// let celsiusFromFahrenheit = (fahrenheit - 32) * 5 / 9;
// document.getElementById("fahrenheitToCelsius").textContent =
//  `Calsius: ${fahrenheit}°F is ${celsiusFromFahrenheit.toFixed(2)}°C`;


//----------Temperature Converter Project-------------
let cel = document.getElementById('cel');
let fah = document.getElementById('fah');

cel.addEventListener('input', function () {
    let c = this.value;  //for getting values
    let f = (c * 9 / 5) + 32;
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fah.value = f;
});

fah.addEventListener('input', function () {
    let f = this.value;
    let c = (f - 32) * 5 / 9;
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    cel.value = c;
});