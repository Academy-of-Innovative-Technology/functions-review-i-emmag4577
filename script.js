// ===== FUNCTIONS WITH NO PARAMETERS ===== //

function sayHello() {
    document.getElementById("output1").textContent =
        "Hello, Madison!";
}

function showDate() {
    const today = new Date();
    const dateString = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
    document.getElementById("output1").textContent = "Today’s date is " + dateString;
}

function motivate() {
    document.getElementById("output1").textContent =
        "“When I'm around you, I kind of feel like I'm on drugs. Not that I do drugs. Unless you do drugs, in which case I do them all the time. All of them.” -Scott Pilgrim";
}

function showRep() {
    document.getElementById("output1").textContent =
        "I represent me.";
}

// ===== FUNCTIONS WITH PARAMETERS ===== //
function addNumbers(x, y) {
    document.getElementById("output2").textContent =
        `The sum of ${x} + ${y} = ${x + y}`;
}

function greetUser(name) {
    document.getElementById("output2").textContent =
        `Hello, ${name}! Welcome to the world of JavaScript.`;
}

function calculateArea(width, height) {
    const area = width * height;
    document.getElementById("output2").textContent =
        `The area of a ${width}x${height} rectangle is ${area} square units.`;
}

function favoriteColor(color) {
    document.getElementById("output2").textContent =
        `Your favorite color is ${color}! `;
}

function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("output2").textContent =
        `${celsius}°C is ${fahrenheit}°F`;
}
// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //

document.getElementById("btnAdd").onclick = () => addNumbers(5, 7);
document.getElementById("btnGreet").onclick = () => greetUser("Alex");
document.getElementById("btnArea").onclick = () => calculateArea(10, 6);
document.getElementById("btnColor").onclick = () => favoriteColor("Blue");
document.getElementById("btnFahrenheit").onclick = () => convertToFahrenheit(25);