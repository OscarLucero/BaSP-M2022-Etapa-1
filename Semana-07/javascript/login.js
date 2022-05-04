var form = document.getElementById('form');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var emailControlError = document.querySelector("#email-error-controller");
var passwordControlError = document.querySelector("#password-error-controller");
var	button = document.getElementById("boton");

button.addEventListener('click', submit);

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function submit(){
	var emailvalor = email.value;
	var passvalor = pass.value;
	if (!validateEmail(emailvalor)) {
		alert("Invalid Email")
	}
	if (!validatePassword(passvalor)) {
		alert("invalid Password")
	}
	if (validateEmail(emailvalor)&&validatePassword(passvalor)) {
		request(emailvalor, passvalor, 'https://basp-m2022-api-rest-server.herokuapp.com/login')
	}
}

function request(emailValue, passwordValue, url){
    fetch((url + '?email=' + emailValue + '&password=' + passwordValue), {
        method : 'GET',
        params : {
            email : emailValue,
            password : passwordValue,
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(jsonResponse){
        console.log(jsonResponse)
        alert(jsonResponse.msg);
    })
    .catch(function(error){
        console.warn(error);
    });
}

function checkInputs() {
	var emailValue = email.value.trim();
	var passValue = pass.value.trim();

	if(emailValue === '') {
		setErrorFor(email, 'Email esta vacio');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No es un Email valido');
	} else {
		setSuccessFor(email);
	}
	
	if(passValue === '') {
		setErrorFor(pass, 'Contraseña no valida');
	} else {
		setSuccessFor(pass);
	}
}


function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function cleanErrorFor(input) {
	input.classList.remove("error");
}

function setSuccessFor(input){
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

email.addEventListener("focus", function () {
  cleanErrorFor(emailControlError);
});

pass.addEventListener("focus", function () {
  cleanErrorFor(passwordControlError);
});

email.addEventListener("blur", function () {
    checkInputs(emailControlError);
  });

pass.addEventListener("blur", function () {
    checkInputs(passwordControlError);
  });

function validatePassword(password) {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var num = 0;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var char = 0;
    var mayus = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var mayusCount = 0;
    var signs = false;
    for (i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) {
            num++;
        } else if(letters.includes(password[i])){
            char++;
        } else if (mayus.includes(password[i])) {
            mayusCount++;
        }else{
            signs = true;
        }
    }
    if (password.length >= 8 && num >= 1 && char >=1 && !signs) {
        return true;
    } else{
        return false;
    }
}
function validateEmail(email) {
    var eRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!eRegex.test(email)) {
        return false;
    }else{
        return true; 
    } 
}
