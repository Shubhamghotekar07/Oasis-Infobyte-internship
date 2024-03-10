// function convertTemprature() {
//     let val = document.getElementById("input-value");
//     let result = document.getElementById("result");
//     let input = document.getElementById("input");
//     let output = document.getElementById("output");
  
//     val.addEventListener("keyup", convertTemprature);
//     input.addEventListener("change", convertTemprature);
//     output.addEventListener("change", convertTemprature);
  
//     let inputValue = input.value;
//     let outputValue = output.value;
  
//     // celsius
//     if (inputValue === "celsius" && outputValue === "fahrenhiet") {
//       result.value = Number((val.value * 9) / 5) + 32;
//     } else if (inputValue === "celsius" && outputValue === "kelvin") {
//       result.value = Number(val.value) + 273.15;
//     } else if (inputValue === "celsius" && outputValue === "celsius") {
//       result.value = val.value;
//     }
  
//     // fahrenhiet
//     if (inputValue === "fahrenhiet" && outputValue === "celsius") {
//       result.value = Number((val.value - 32) * 5) / 9;
//     } else if (inputValue === "fahrenhiet" && outputValue === "kelvin") {
//       result.value = Number(((val.value - 32) * 5) / 9) + 273.15;
//     } else if (inputValue === "fahrenhiet" && outputValue === "fahrenhiet") {
//       result.value = val.value;
//     }
  
//     // kelvin
//     if (inputValue === "kelvin" && outputValue === "celsius") {
//       result.value = Number(val.value) - 273.15;
//     } else if (inputValue === "kelvin" && outputValue === "fahrenhiet") {
//       result.value = Number(((val.value - 273.15) * 9) / 5) + 32;
//     } else if (inputValue === "kelvin" && outputValue === "kelvin") {
//       result.value = val.value;
//     }
//   }
  
//   function resetForm(){
//     document.getElementById("myForm").reset();
//   } 

// Function to reset the form
function resetForm() {
  // Reset the form with ID "myForm"
  document.getElementById("myForm").reset(); 
  // Clear the result field
  document.getElementById("result").value = ""; 
}

// Function to convert temperature
function convertTemprature() {
  // Get input value entered by the user and convert it to a floating-point number
  var inputValue = parseFloat(document.getElementById("input-value").value); 

  // Get selected units for conversion
  var inputUnit = document.getElementById("input").value; // Get the selected input unit
  var outputUnit = document.getElementById("output").value; // Get the selected output unit

  // Declare a variable to store the result of the conversion
  var result;

  // Perform temperature conversion based on selected units
  if (inputUnit === outputUnit) {
      // If input and output units are the same, no conversion needed, so result is equal to input value
      result = inputValue; 
  } else if (inputUnit === "celsius") { // If input unit is Celsius
      if (outputUnit === "fahrenhiet") { // Convert Celsius to Fahrenheit
          result = (inputValue * 9 / 5) + 32; // Formula for Celsius to Fahrenheit conversion
      } else if (outputUnit === "kelvin") { // Convert Celsius to Kelvin
          result = inputValue + 273.15; // Formula for Celsius to Kelvin conversion
      }
  } else if (inputUnit === "fahrenhiet") { // If input unit is Fahrenheit
      if (outputUnit === "celsius") { // Convert Fahrenheit to Celsius
          result = (inputValue - 32) * 5 / 9; // Formula for Fahrenheit to Celsius conversion
      } else if (outputUnit === "kelvin") { // Convert Fahrenheit to Kelvin
          result = (inputValue - 32) * 5 / 9 + 273.15; // Formula for Fahrenheit to Kelvin conversion
      }
  } else if (inputUnit === "kelvin") { // If input unit is Kelvin
      if (outputUnit === "celsius") { // Convert Kelvin to Celsius
          result = inputValue - 273.15; // Formula for Kelvin to Celsius conversion
      } else if (outputUnit === "fahrenhiet") { // Convert Kelvin to Fahrenheit
          result = (inputValue - 273.15) * 9 / 5 + 32; // Formula for Kelvin to Fahrenheit conversion
      }
  }

  // Display the result in the result field with two decimal places
  document.getElementById("result").value = result.toFixed(2); 
}
