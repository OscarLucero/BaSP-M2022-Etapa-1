var form = document.getElementById('form');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var emailControlError = document.querySelector("#email-error-controller");
var passwordControlError = document.querySelector("#password-error-controller");


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

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
