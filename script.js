// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input   (Parent Function)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Possible characters to be included in password
var UpperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var LowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var Numbers = ["0123456789"];
var SpecialChar = ["!#$%&)( *+,.;:=-><?\\^_~`|/"]




// Child Function (This function is within function write Password)
function generatePassword() {
  var password = "";
  var length = prompt("How long would you like your password to be? (It must be atleast 8 characters and no longer than 128.)")



    if(  length < 8 ||  length > 128){
    alert("Password length must be at least 8 characters and no greater than 128!")
    var length = prompt("How long would you like your password to be? (It must be atleast 8 characters and no longer than 128.)");
  }

  var includeUpperCase = confirm("Would you like to include Uppercase characters in your password?");
  var includeLowerCase = confirm("Would you like to include Lowercase characters in your password?");
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  var includeSpecialChar = confirm("Would you like to include special characters in your password?");



  if (includeUpperCase === false && includeLowerCase === false && includeNumbers === false && includeSpecialChar === false){
    alert("Your password must consist of one of the following character types (Uppercase,Lowercase, Numbers, or Special characters.)");
    alert("Lets Try Again!");
     includeUpperCase = confirm("Would you like to include Uppercase characters in your password?");
     includeLowerCase = confirm("Would you like to include Lowercase characters in your password?");
     includeNumbers = confirm("Would you like to include numbers in your password?");
     includeSpecialChar = confirm("Would you like to include special characters in your password?");
  }



  if(includeUpperCase === true)
  alert("Your password has the possibility to contain uppercase characters (*Note, this does not gurantee an uppercase character to be used. Password is generated at random).");

  if(includeLowerCase === true)
  alert("Your password has the possibility to contain lowercase characters(*Note, this does not gurantee a lowercase character to be used. Password is generated at random).");

  if(includeNumbers === true)
  alert("Your password has the possibility to contain numbers (*Note, this does not gurantee a number to be used. Password is generated at random).");

  if(includeSpecialChar === true)
  alert("Your password has the possibility to contain special characters (*Note, this does not gurantee a special character to be used. Password is generated at random).");



//concat(adds) all possible character types to be used in password. only adds if confirmed. (tested = true)
  var passwordPosibilities = "";
  if (includeUpperCase) { passwordPosibilities += UpperCase; }
  if (includeLowerCase) { passwordPosibilities += LowerCase; }
  if (includeNumbers) { passwordPosibilities += Numbers; }
  if (includeSpecialChar) { passwordPosibilities += SpecialChar; }
  
  // Generate the password
  for (var i = 0; i < length; i++) {
    password += passwordPosibilities.charAt(Math.floor(Math.random() * passwordPosibilities.length));
  }
  
  return password;
}








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
