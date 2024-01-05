// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set the number of characters in the password
function getCharCount() { 
  var charCount = prompt("Enter a number between 8 and 128 to set password character count:");
  while (charCount) {
    if (charCount >= 8 && charCount <= 128) {
      var confirmMessage = confirm("Are you sure you want your password to contain " + charCount + " characters?");
      if (confirmMessage == true) {
        return charCount;
        } else {
        charCount = getCharCount();
          };
      } else {
        alert("Invalid value!");
        charCount = getCharCount();
        };
  };
};

// Determine if password will contain lowercase characters
function getLowerChar() {
  var passwordAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var lowerChar = confirm("Include lowercase characters?");
  if (lowerChar == true) {
    lowerChar = passwordAlphabet;
    return lowerChar;
  } else {
    lowerChar = "";
    };
};

// Determine if password will contain lowercase letters
function getUpperCase() {
  var passwordUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  var upperChar = confirm("Include uppercase characters?");
  if (upperChar == true) {
    upperChar = passwordUpper;
    return upperChar;
  } else {
    upperChar = "";
    };
};

// Determine if password will contain numerical characters
function getNumericChar() {
  var passwordDigits = "1234567890";
  var numericChar = confirm("Include numerical characters?");
  if (numericChar == true) {
    numericChar = passwordDigits;
    return numericChar;
  } else {
    numericChar = "";
    };
};

// Determine if password will contain special characters
function getSpecialChar() {
  var passwordSpecial = "`!@#$%^&*()-_";
  var specialChar = confirm("Include special characters?");
  if (specialChar == true) {
    specialChar = passwordSpecial;
    return specialChar;
  } else {
    specialChar = "";
    };
};

// Generate the password
function generatePassword() {
    charCount = getCharCount();
    
    // Check for which characters to include in the password
    function getPasswordChar () {
      lowerChar = getLowerChar();
      upperChar = getUpperCase();
      numericChar = getNumericChar();
      specialChar = getSpecialChar();
      var passwordChar = lowerChar + upperChar + numericChar + specialChar;
      // Send user back to character selection if no options are selected
      while (!passwordChar == true) {
        alert("No characters selected!");
        generatePassword();
          }
      };

  // Password code sourced from: https://dev.to/code_mystery/random-password-generator-using-javascript-6a
  var password = "";

  for (var i = 0; i <= charCount; i++) {
    var randomNumber = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar.substring(randomNumber, randomNumber +1);
  };
    document.getElementById("password").value = password;
    return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   
  passwordText.attributes = passwordText;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);