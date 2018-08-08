/**
 *
 *
 * @returns
 */
/* Function to validate user password */
check = () => {
    reset(); /* Reset previous result */
    let userPassword = document.getElementById("password-string").value; /* Get password entered by user */


    /* Condition to check if password meets minimum and maximum length allowed  */
    if (userPassword.length < 6) {
        document.getElementById("error-display").innerHTML =
            "*Minimum password length is 6";
        return;
    } else if (userPassword.length > 12) {
        document.getElementById("error-display").innerHTML =
            "*Maximum password length is 12";
        return;
    } else {

        let totalStrength = 0; /* Total password strength  */
        let lowerCaseStrength = 0; /* Password's Lowecase Strength  */
        let upperCaseStrength = 0; /* Password's Uppercase Strength  */
        let specialCharStrength = 0; /* Password's Special Character Strength  */
        let numberStrength = 0; /* Password's Number Strength  */

        /* The criteria the user's password is to be validated against
        Regular Expression is used to represent each criterion */
        var upperCaseLetter = /[A-Z]/g;
        var lowerCaseLetter = /[a-z]/g;
        var number = /[0-9]/g;
        var specialCharacter = /[!@#$&]/g;

        /* Uppercase validation */
        if (upperCaseLetter.test(userPassword)) {
            upperCaseStrength = 25;
        }
        /* Lowercase validation */
        if (lowerCaseLetter.test(userPassword)) {
            lowerCaseStrength = 25;
        }
        /* Number validation */
        if (number.test(userPassword)) {
            numberStrength = 25;
        }
        /* Special Character validation */
        if (specialCharacter.test(userPassword)) {
            specialCharStrength = 25;
        }

        /* The total strength of the password is sumed up */
        totalStrength =
            lowerCaseStrength +
            upperCaseStrength +
            numberStrength +
            specialCharStrength;

        /* The result of the strength of the password entered by user is displayed */
        document.getElementById("lower-score").innerHTML = `${lowerCaseStrength}%`;
        document.getElementById("upper-score").innerHTML = `${upperCaseStrength}%`;
        document.getElementById("number-score").innerHTML = `${numberStrength}%`;
        document.getElementById("sc-score").innerHTML = `${specialCharStrength}%`;
        document.getElementById("score").innerHTML = `${totalStrength}%`;

        clrPswrd();
    }
};

/* Function to reset the error message and result of password strength */
reset = () => {
    document.getElementById("error-display").innerHTML = "";
    document.getElementById("lower-score").innerHTML = "";
    document.getElementById("upper-score").innerHTML = "";
    document.getElementById("number-score").innerHTML = "";
    document.getElementById("sc-score").innerHTML = "";
    document.getElementById("score").innerHTML = "";
};

clrPswrd = () => document.getElementById("password-string").value = '';