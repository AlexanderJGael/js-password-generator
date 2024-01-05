# Random Password Generator

## Description

This project is a simple random password generator that allows users to customize the length and character types (lowercase, uppercase, numerical, and special characters) of their passwords.

The majority of the source code for this project has been provided by edX as part of their Web-Development Bootcamp. The developer's personal code, responsible for the core functionality and user interactions, is located in lines 5-97.

## External Code Attribution

This project includes code sourced from [dev.to](https://dev.to/code_mystery/random-password-generator-using-javascript-6a). The password generation logic was adapted from the provided code snippet.

```Javascript
var password = "";
for (var i = 0; i <= charCount; i++) {
  var randomNumber = Math.floor(Math.random() * passwordChar.length);
  password += passwordChar.substring(randomNumber, randomNumber + 1);
};
```

## Table of Contents

- [Usage](#usage)
- [Functions](#functions)
  - [`getCharCount()`](#getcharcount)
  - [`getLowerChar()`](#getlowerchar)
  - [`getUpperCase()`](#getuppercase)
  - [`getNumericChar()`](#getnumericchar)
  - [`getSpecialChar()`](#getspecialchar)
  - [`generatePassword()`](#generatepassword)
  - [`getPasswordChar()`](#getpasswordchar)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Usage

Click the "Generate Password" button to interactively set the password length and choose the character types for your password.

## Functions

### `getCharCount()`

Prompts the user to enter a number between 8 and 128 to set the password character count. It ensures a valid input and returns the selected character count.

### `getLowerChar()`

Asks the user if they want to include lowercase characters. Returns a string of lowercase characters if confirmed, otherwise an empty string.

### `getUpperCase()`

Asks the user if they want to include uppercase characters. Returns a string of uppercase characters if confirmed, otherwise an empty string.

### `getNumericChar()`

Asks the user if they want to include numerical characters. Returns a string of numerical characters if confirmed, otherwise an empty string.

### `getSpecialChar()`

Asks the user if they want to include special characters. Returns a string of special characters if confirmed, otherwise an empty string.

### `generatePassword()`

Generates a random password based on user preferences for character count and types. It utilizes the functions mentioned above to determine the character sets to include.

### `getPasswordChar()`

Combines the selected character sets (lowercase, uppercase, numerical, special) and ensures at least one set is selected. If not, it prompts the user to select at least one.

## Examples

```javascript
// Example: Generating a password
const password = generatePassword();
console.log(password); // Output: Randomly generated password based on user preferences
```


## License

This project is licensed under the [MIT License](LICENSE).

--- 