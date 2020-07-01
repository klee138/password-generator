// Assignment Code
var generateBtn = document.querySelector("#generate");

//generate a password for the function referenced in the included script
function generatePassword() {
  //prompt for password length
  var passLength = prompt("Please enter password length between 8 and 128", "8");
  if (passLength < 8 || passLength > 128) {
    alert("Please enter a number between 8 and 128");
    return;
  }
  //prompt for password complexity options
  var passUpOpt = confirm("would you like to include uppercase characters?");
  var passLowOpt = confirm("would you like to include lowercase characters?");
  var passNumOpt = confirm("would you like to include numeric characters?");
  var passSpecOpt = confirm("would you like to include special characters?");
  //array for password characters
  //let passChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')' '_' '+'];
  var passUpChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passLowChar = "abcdefghijklmopqrstuvwxyz";
  var passNumChar = "1234567890";
  var passSpecChar = "!@#$%^&*()_+";
  var passChar = "";
  
 /*  if (passUpOpt = true) {
    if (passLowOpt = true) {
      if (passNumOpt = true) {
        if (passSpecOpt = true) {
          passChar = passUpChar + passLowChar + passNumChar + passSpecChar;
        }
      }
    }
    }  else if (passUpOpt = false) {
    if (passLowOpt = true) {
      if (passNumOpt = true) {
        if (passSpecChar = true) {
          passChar = passLowChar + passNumChar + passSpecChar;
        }
      }
    }
  } */
  //combinations of strings
  if (passUpOpt && passLowOpt && passNumOpt && passSpecOpt) {
    passChar = passUpChar + passLowChar + passNumChar + passSpecChar;
  } else if (!passUpOpt && !passLowOpt && !passNumOpt && !passSpecOpt) {
    alert("Please choose at least one type of character")
  } else if (passLowOpt && passNumOpt && passSpecOpt) {
    passChar = passLowChar + passNumChar + passSpecChar;
  } else if (passNumOpt && passSpecOpt) {
    passChar = passNumChar + passSpecChar;
  } else if (passSpecOpt) {
    passChar = passSpecChar;
  } else if (passUpOpt && passNumOpt && passSpecOpt) {
    passChar = passUpChar + passNumChar + passSpecChar;
  } else if (passUpOpt && passSpecOpt) {
    passChar = passUpChar + passSpecChar;
  } else if (passUpOpt && passLowOpt && passNumOpt) {
    passChar = passUpChar + passLowChar + passNumChar;
  } else if (passUpOpt && passLowOpt && passSpecChar) {
    passChar = passUpChar + passLowChar + passSpecChar;
  } else if (passUpOpt && passNumOpt) {
    passChar = passUpChar + passNumChar;
  } else if (passUpOpt) {
    passChar = passUpChar;
  } else if (passLowOpt && passNumOpt) {
    passChar = passLowChar + passNumChar;
  } else if (passLowChar) {
    passChar = passLowChar;
  } else if (passNumOpt && passSpecOpt) {
    passChar = passNumChar + passSpecChar;
  } else if (passSpecOpt) {
    passChar = passSpecChar;
  } else if (passNumOpt) {
    passChar = passNumChar;
  } else if (passUpOpt && passLowOpt) {
    passChar = passUpChar + passLowChar;
  } else if (passLowOpt && passSpecOpt) {
    passChar = passLowChar && passSpecChar;
  }

  console.log(passChar);


  var pass = "";
  //for loop to pick the characters the password will contain
  for(var i = 0; i <= passLength; i++) {
    pass = pass + passChar.charAt(Math.floor(Math.random() * Math.floor(passChar.length - 1)));
  }
  alert(pass);
  //return pass;
  document.querySelector("#password").value = pass;

}

generateBtn.addEventListener("click", generatePassword);
// Write password to the #password input
/* function writePassword() {
  var password = generatePassword();
  console.log(generatePassword);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 */
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
