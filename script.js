
const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "C") {
      // Clear the input
      currentInput = "";
      input.value = "";
    } 
    else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        input.value = currentInput;
      } catch (error) {
        input.value = "Error";
        currentInput = "";
      }
    } 
    else {
      currentInput += value;
      input.value = currentInput;
    }
  });
});
