// Assignment Code
var generateBtn = document.querySelector("#generate");

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

function generatePassword() {
  charCount = getCharCount();
  lowerChar = getLowerChar();
  upperChar = getUpperCase();
  numericChar = getNumericChar();
  specialChar = getSpecialChar();
  var passwordChar = lowerChar + upperChar + numericChar + specialChar;
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
  password = generatePassword();
  var passwordText = document.querySelector("#password");
   
  passwordText.value = passwordText;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(password);