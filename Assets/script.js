// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  lowerCase: false,
  upperCase: false,
  num: false,
  specialChars: false,
};

// Write password to the #password input
function writePassword() {
  var generatePassword = function () {
    var userInput = prompt("How many characters do you want for your password?");
    var password = "";

    if (parseInt(userInput) < 8 || parseInt(userInput) > 128) {
      alert("Password length must be between 8 and 128 characters");
    } else if (userInput) {
      var lowerCase = confirm("Do you want lowercase letters?");
      if (lowerCase == true) {
        
        passwordCriteria.lowerCase = true;
      }
      var upperCase = confirm("Do you want uppercase characters?");

      if (upperCase == true) {
  
        passwordCriteria.upperCase = true;
      }
      var num = confirm("Do you want numbers?");

      if (num == true) {

        passwordCriteria.num = true;
      }
      var specialChars = confirm("Do you want special characters?");

      if (specialChars == true) {

        passwordCriteria.specialChars = true;
      } 

      if (!lowerCase && !upperCase && !num && !specialChars) {
        alert("Password must have at least one category of characters.")
        return;
      }

      var characters = "";

      if (passwordCriteria.lowerCase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
      }

      if (passwordCriteria.upperCase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }

      if (passwordCriteria.num) {
        characters += "0123456789";
      }

      if (passwordCriteria.specialChars) {
        characters += "!@#$%^&*()_-+=[]{}";
      }

      for (var i = 0; i < parseInt(userInput); i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
      }
    }

    return password;
  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
