/*
 *   Created by: Ederson Cardoso - Created on: May 13, 2019
*/

"use strict";

// global variables
var profile = {};

function validateFirstName() {
    var input = document.getElementById("txtFirstName");
    var errorDiv = document.getElementById("firstNameError");
    try {
        if (input.value === "") {
            throw "Please provide your first name";
        }
        // remove any styling and message
        input.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.firstName = input.value;
        // copy profile value to profile section
        document.getElementById("profileFirstName").innerHTML = profile.firstName;
        // make profile section and email section visible
        document.getElementById("profileDetails").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("proFirstName").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
    }

function validateLastName() {
    var input = document.getElementById("txtLastName");
    var errorDiv = document.getElementById("lastNameError");
    try {
        if (input.value === "") {
            throw "Please provide your last name";
        }
        // remove any styling and message
        input.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.lastName = input.value;
        // copy profile value to profile section
        document.getElementById("profileLastName").innerHTML = profile.lastName;
        // make profile section and email section visible
        document.getElementById("profileDetails").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("proLastName").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}
function validateAge() {
    var input = document.getElementById("numAge");
    var errorDiv = document.getElementById("ageError");
    try {
        if (input.value <= 17) {
            throw "Please provide your age";
        }
        // remove any styling and message
        input.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.age = input.value;
        // copy profile value to profile section
        document.getElementById("profileAge").innerHTML = profile.age;
        // make profile section and email section visible
        document.getElementById("profileDetails").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("proAge").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}
function validateAddress() {
    var input = document.getElementById("txtAddress");
    var errorDiv = document.getElementById("addressError");
    try {
        if (input.value === "") {
            throw "Please provide your address";
        }
        // remove any styling and message
        input.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.address = input.value;
        // copy profile value to profile section
        document.getElementById("profileAddress").innerHTML = profile.address;
        // make profile section and email section visible
        document.getElementById("profileDetails").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("proAddress").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}
function validateCity() {
    var input = document.getElementById("txtCity");
    var errorDiv = document.getElementById("cityError");
    try {
        if (input.value === "") {
            throw "Please provide your city";
        }
        // remove any styling and message
        input.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.city = input.value;
        // copy profile value to profile section
        document.getElementById("profileCity").innerHTML = profile.city;
        // make profile section and email section visible
        document.getElementById("profileDetails").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("proCity").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}
function validatePostalCode() {
    var input = document.getElementById("txtPostalCode");
    var errorDiv = document.getElementById("postalCodeError");
    try {
        if (input.value === "") {
            throw "Please provide your postal code";
        }
        //A valid canadian postcode is:
        //in the format A1A 1A1, where A is a letter and 1 is a digit.
        //a space separates the third and fourth characters.
        //do not include the letters D, F, I, O, Q or U.
        //the first position does not make use of the letters W or Z.
        if (/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/.test(input.value.toUpperCase()) === false) {
            throw "Please provide a valid  postal code";
        }
        // remove any styling and message
        input.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.postalCode = input.value.toUpperCase();
        // copy profile value to profile section
        document.getElementById("profilePostalCode").innerHTML = profile.postalCode;
        // make profile section and email section visible
        document.getElementById("profileDetails").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("proPostalCode").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}

function validateProvince() {
    var input = document.getElementById("lstProvince");
    var errorDiv = document.getElementById("provinceError");
    try {
        if (input.value === "") {
            throw "Please provide your province";
        }
        // remove any styling and message
        input.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.province = input.value;
        // copy profile value to profile section
        document.getElementById("profileProvince").innerHTML = profile.province;
        // make profile section and email section visible
        document.getElementById("profileDetails").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("proPostalCode").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}
function validateEmail() {
    var input = document.getElementById("txtEmail");
    var errorDiv = document.getElementById("emailError");
    try {
        //using search option
        //if (input.value.search("@") === -1 ||
        //    input.value.lastIndexOf(".") === -1) {
        //    throw "Please provide a valid email address";
        //}
        //using RegEx
        if (/\S+@\S+\.\S+/.test(input.value) === false) {
           
            throw "Please provide a valid email address";
        }
        // remove any styling and message
        input.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.email = input.value;
        // copy profile value to profile section
        document.getElementById("profileEmail").innerHTML = profile.email;
        // make profile section and email section visible
        document.getElementById("profileDetails").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("proEmail").style.display = "block";
    }
    catch (msg) {
        // display error message
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}
function validatePassword() {
    var pw1Input = document.getElementById("txtPassword");
    var pw2Input = document.getElementById("txtConfirm");
    var errorDiv = document.getElementById("passwordError");
    try {
        if (pw1Input.value.length < 6) {
            throw "Password must be at least 6 characters";
        }
        if (pw1Input.value != pw2Input.value) {
            throw "Password and confirmation does not  match";
        }
        // remove any password error styling and message
        pw1Input.style.background = "";
        pw2Input.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profile.password = "******";
        profile.confirm = "******";
    }
    catch (msg) {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        // change input style
        pw1Input.style.background = "rgb(255,233,233)";
        pw2Input.style.background = "rgb(255,233,233)";
    }
}

document.getElementById("txtPostalCode").addEventListener("keyup", upperCase, false);
function upperCase() {
    var input = document.getElementById("txtPostalCode");
    input.value = input.value.toUpperCase();
}

function createAccount() {
    validateFirstName();
    validateLastName();
    validateAddress();
    validateCity();
    validatePostalCode();
    validateAge();
    validateEmail();
    validateProvince();
    validatePassword();

    if (Object.keys(profile).length == 10)
        document.getElementById("msgSuccess").style.display = "block";
        msgSuccess.innerHTML = "Thanks for registering with our website, your customer record was created successfully.";
}

// sets all form field values to defaults
function resetForm() {
    document.getElementById("profileDetails").style.display = "none";
    document.getElementById("msgSuccess").style.display = "none";
}

// creates event listeners
function createEventListeners() {
    document.getElementById("btnSubmit").addEventListener("click", createAccount, false);
}

// resets form when page is reloaded
window.addEventListener("load", resetForm, false);


