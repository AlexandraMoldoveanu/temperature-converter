const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");


function roundNum(num) {
    return Math.round(num*100)/100;
}

function celsiusToFahrenheitAndKelvin() {
    const celsiusTemp = parseFloat(celsiusInput.value);
    const fahrenheitTemp = (celsiusTemp * 9/5) + 32;
    const kelvinTemp = celsiusTemp + 273.15;
    fahrenheitInput.value = roundNum(fahrenheitTemp);
    kelvinInput.value = roundNum(kelvinTemp);
}

function fahrenheitToCelsiusAndKelvin() {
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const celsiusTemp = (fahrenheitTemp - 32) * 5/9
    const kelvinTemp = (fahrenheitTemp + 459.67) * 5/9;
    celsiusInput.value = roundNum(celsiusTemp);
    kelvinInput.value = roundNum(kelvinTemp);
}

function kelvinToCelsiusAndFahrenheit() {
    const kelvinTemp = parseFloat(kelvinInput.value);
    const celsiusTemp = kelvinTemp - 273.15;
    const fahrenheitTemp = 9/5 * (kelvinTemp - 273) + 32;
    celsiusInput.value = roundNum(celsiusTemp);
    fahrenheitInput.value = roundNum(fahrenheitTemp);
}
function main() {
    celsiusInput.addEventListener("input",celsiusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener("input", fahrenheitToCelsiusAndKelvin);
    kelvinInput.addEventListener("input", kelvinToCelsiusAndFahrenheit);      
}

main();

