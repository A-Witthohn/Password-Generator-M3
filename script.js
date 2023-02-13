// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"];
var specialChar = ["!#$%&)( *+,.;:=-><?\\^_~`|/"]
var length = prompt("How long would you like your password to be? (It must be atleast 8 characters and no longer than 128.)")



function generatePassword() {
  var password = "";
  var length = prompt("How long would you like your password to be? (It must be atleast 8 characters and no longer than 128.)")

  if(  length < 8 ||  length > 128){
    alert("Password length must be at least 8 characters and no greater than 128!")
    var length = prompt("How long would you like your password to be? (It must be atleast 8 characters and no longer than 128.)");
  }
}








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
