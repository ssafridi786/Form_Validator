// Pulling all DOM elements from HTML

const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show Input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check Email is Valid

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

//Check Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} Characters `);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} Characters `);
    } else {
        showSuccess(input);
    }
}
//Check Required Fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//check password match

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    } else {
        showSuccess(input);
    }
}
// Get Field Name

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event Listeners

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 10);
    checkLength(password, 6, 15);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    /* if (username.value === '') {
         showError(username, 'Username is required');
     } else {
         showSuccess(username);
     }
 
     if (email.value === '') {
         showError(email, 'Email is required');
     } else if (!validateEmail(email.value)) {
         showError(email, 'Email is not valid');
 
     }
 
     else {
         showSuccess(email);
     }
 
     if (password.value === '') {
         showError(password, 'Password is required');
     } else {
         showSuccess(password);
     }
 
     if (password2.value === '') {
         showError(password2, 'Password is required');
     } else {
         showSuccess(password2);
     }*/
});