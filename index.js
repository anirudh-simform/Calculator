import { Calculator } from "./functions/calculator.js";
import { addEventListeners } from "./functions/add-event-listeners.js";
// main script

// Set Constants

// PI
const pi = document.querySelector(".pi");
pi.dataset.value = Math.PI;

// e
const e = document.querySelector(".e");
e.dataset.value = Math.E;

addEventListeners();
const safeToStart = false;
let calculatorInput;
const calculator = new Calculator("");

export { calculator };
