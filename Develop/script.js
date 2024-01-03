// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordLength () {
  var passwordLength = prompt("Password Length: (Enter a number between 8 and 128)") {
    if (passwordLength < 8) {
      alert("Invalid value!")
    };
/*     if (passwordLength > 128) {
      var passwordLength = alert("Invalid value!")
    }
    else {
      var passwordLength = passwordLength;
    } */
  };
};

/* function includeChar () {
  var lowerChar = confirm("Include lowercase characters?");
var upperChar = confirm("Include uppercase characters?");
  var numericalChar = confirm("Include numerical characters?");
  var specialChar = confirm("Include special characters?");

  if (lowerChar == true) {
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperChar) [
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  ]
  if 
}; */


function generatePassword() {
  passwordLength ();
  includeChar ();
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
