const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const formControlError = document.querySelector(".form-control");


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const emailValue = email.value.trim();
	const passValue = pass.value.trim();

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
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function cleanErrorFor(input){
    formControlError.classList.remove('error');
}

function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

email.addEventListener("focus", function () {
    cleanErrorFor(email);
  });

pass.addEventListener("focus", function () {
    cleanErrorFor(pass);
  });

email.addEventListener("blur", function () {
    checkInputs();
  });

pass.addEventListener("blur", function () {
    checkInputs();
  });