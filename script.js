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

// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //
