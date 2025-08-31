// ==============================
// PART 1: Variables & Conditionals
// ==============================

let userName = "Marko";
let userAge = 20;

// Simple conditional example
if (userAge >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is not an adult.");
}

// ==============================
// PART 2: Custom Functions
// ==============================

// Function 1: Display a greeting in the DOM
function showGreeting() {
    document.getElementById("greeting").textContent = "Hello, " + userName + "!";
}

// Function 2: Add numbers to the list dynamically
function displayNumbers() {
    let list = document.getElementById("number-list");
    list.innerHTML = ""; // Clear before adding
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = "Number " + i;
        list.appendChild(li);
    }
}

// Call function immediately to show numbers on page load
displayNumbers();

// ==============================
// PART 3: Loops
// ==============================

// Loop Example 1: For loop
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log("For loop number:", numbers[i]);
}

// Loop Example 2: While loop
let count = 0;
let loopMessage = "";
while (count < 3) {
    loopMessage += "Count is " + count + " | ";
    count++;
}
document.getElementById("loop-output").textContent = loopMessage;

// ==============================
// PART 4: DOM Interactions
// ==============================

// Interaction 1: Change paragraph text (greeting function)
// Interaction 2: Dynamically create list items (displayNumbers function)
// Interaction 3: Update content of paragraph with loop result (while loop above)
