// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input   (Parent Function)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// arrays of Possible characters to be included in password
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"];
var specialChar = ["!#$%&)( *+,.;:=-><?\\^_~`|/"];




// Child Function (This function is within function write Password)
function generatePassword() {
  var password = "";
  var length = prompt("How long would you like your password to be? (It must be atleast 8 characters and no longer than 128.)")

  //Prompts user for password length again if outside parameters
    if (  length < 8 ||  length > 128){
    alert("Password length must be at least 8 characters and no greater than 128!")
    var length = prompt("How long would you like your password to be? (It must be atleast 8 characters and no longer than 128.)");
  }

  //alerts user of length if length is within parameters above
  if( length >= 8 || length <= 128){
    alert("Your password length will be " + length + "characters long")
  };

  // UpperCase Prompt, includes alert if true
  var includeUpperCase = confirm("Would you like to include Uppercase characters in your password?");
  if(includeUpperCase === true)
  alert("Your password has the possibility to contain uppercase characters (*Note, this does not gurantee an uppercase character to be used. Password is generated at random).");

  //Lowercase Prompt, includes alert if true
  var includeLowerCase = confirm("Would you like to include Lowercase characters in your password?");
  if(includeLowerCase === true)
  alert("Your password has the possibility to contain lowercase characters(*Note, this does not gurantee a lowercase character to be used. Password is generated at random).");

  //Numbers Prompt, inlcudes alert if true
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  if(includeNumbers === true)
  alert("Your password has the possibility to contain numbers (*Note, this does not gurantee a number to be used. Password is generated at random).");

  //Special Character Prompt, includes alert if true
  var includeSpecialChar = confirm("Would you like to include special characters in your password?");
  if(includeSpecialChar === true)
  alert("Your password has the possibility to contain special characters (*Note, this does not gurantee a special character to be used. Password is generated at random).");



// If statement used if all conditions are false. reprompts user to include a min. of 1 type
  if (includeUpperCase === false && includeLowerCase === false && includeNumbers === false && includeSpecialChar === false){
    alert("Your password must consist of one of the following character types (Uppercase,Lowercase, Numbers, or Special characters.)");
    alert("Lets Try Again!");
     includeUpperCase = confirm("Would you like to include Uppercase characters in your password?");
     includeLowerCase = confirm("Would you like to include Lowercase characters in your password?");
     includeNumbers = confirm("Would you like to include numbers in your password?");
     includeSpecialChar = confirm("Would you like to include special characters in your password?");
  }




//concat(adds) all possible character types to be used in password. only adds if confirmed. (tested = true)
  var passwordPosibilities = "";
  if (includeUpperCase) { passwordPosibilities += upperCase; }
  if (includeLowerCase) { passwordPosibilities += lowerCase; }
  if (includeNumbers) { passwordPosibilities += numbers; }
  if (includeSpecialChar) { passwordPosibilities += specialChar; }


  
  // created logic to generate password of users specified length and return it in field
  for (var i = 0; i < length; i++) {
    password += passwordPosibilities.charAt(Math.floor(Math.random() * passwordPosibilities.length));
  }
  
  return password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
