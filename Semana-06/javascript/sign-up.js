var form = document.getElementById('form');
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var dni = document.getElementById('dni');
var fn = document.getElementById('fn');
var telefono = document.getElementById('telefono');
var direccion = document.getElementById('direccion');
var localidad = document.getElementById('localidad');
var cp = document.getElementById('cp');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var pass2 = document.getElementById('pass2');
var formControlError = document.querySelector(".form-control");
var nameControlError = document.querySelector("#name-error-controller");
var lnControlError = document.querySelector("#ln-error-controller");
var dniControlError = document.querySelector("#dni-error-controller");
var fnControlError = document.querySelector("#fn-error-controller");
var telefonoControlError = document.querySelector("#telefono-error-controller");
var direccionControlError = document.querySelector("#direccion-error-controller");
var locControlError = document.querySelector("#loc-error-controller");
var cpControlError = document.querySelector("#cp-error-controller");
var emailControlError = document.querySelector("#email-error-controller");
var passwordControlError = document.querySelector("#password-error-controller");
var password2ControlError = document.querySelector("#password2-error-controller");


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	var nombreValue = nombre.value.trim();
    var apellidoValue = apellido.value.trim();
    var dniValue = dni.value.trim();
    var fnValue = fn.value.trim();
    var telefonoValue = telefono.value.trim();
    var direccionValue = direccion.value.trim();
    var localidadValue = localidad.value.trim();
    var cpValue = cp.value.trim();
	var emailValue = email.value.trim();
	var passValue = pass.value.trim();
	var pass2Value = pass2.value.trim();


	
	if(nombreValue === '') {
		setErrorFor(nombre, 'Nombre esta vacio');
	} else {
		setSuccessFor(nombre);
	}

    if(apellidoValue === '') {
		setErrorFor(apellido, 'Apellido esta vacio');
	} else {
		setSuccessFor(apellido);
	}

    if(dniValue === '') {
		setErrorFor(dni, 'DNI esta vacio');
	} else {
		setSuccessFor(dni);
	}
    
    if(fnValue === '') {
		setErrorFor(fn, 'Fecha Invalida');
	} else {
		setSuccessFor(fn);
	}
    
    if(telefonoValue === '') {
		setErrorFor(telefono, 'Telefono esta Incompleto');
	} else {
		setSuccessFor(telefono);
	}
    
    if(direccionValue === '') {
		setErrorFor(direccion, 'Direccion Vacia');
	} else {
		setSuccessFor(direccion);
	}
    
    if(localidadValue === '') {
		setErrorFor(localidad, 'Localidad Vacia');
	} else {
		setSuccessFor(localidad);
	}
    
    if(cpValue === '') {
		setErrorFor(cp, 'Campo Vacio');
	} else {
		setSuccessFor(cp);
	}

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
	
	if(pass2Value === '') {
		setErrorFor(pass2, 'Contraseña no valida');
	} else if(passValue !== pass2Value) {
		setErrorFor(pass2, 'Las contraseña no coiniciden');
	} else{
		setSuccessFor(pass2);
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

function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

nombre.addEventListener("focus", function () {
    cleanErrorFor(nameControlError);
  });

apellido.addEventListener("focus", function () {
    cleanErrorFor(lnControlError);
  });

dni.addEventListener("focus", function () {
    cleanErrorFor(dniControlError);
  });

fn.addEventListener("focus", function () {
    cleanErrorFor(fnControlError);
  });

telefono.addEventListener("focus", function () {
    cleanErrorFor(telefonoControlError);
  });

direccion.addEventListener("focus", function () {
    cleanErrorFor(direccionControlError);
  });

localidad.addEventListener("focus", function () {
    cleanErrorFor(locControlError);
  });

cp.addEventListener("focus", function () {
    cleanErrorFor(cpControlError);
  });

email.addEventListener("focus", function () {
    cleanErrorFor(emailControlError);
  });

pass.addEventListener("focus", function () {
    cleanErrorFor(passwordControlError);
  });

pass2.addEventListener("focus", function () {
    cleanErrorFor(password2ControlError);
  });

nombre.addEventListener("blur", function () {
    checkInputs(nameControlError);
  });

apellido.addEventListener("blur", function () {
    checkInputs(lnControlError);
  });

dni.addEventListener("blur", function () {
    cleanErrorFor(dniControlError);
  });

fn.addEventListener("blur", function () {
    cleanErrorFor(fnControlError);
  });

telefono.addEventListener("blur", function () {
    cleanErrorFor(telefonoControlError);
  });

direccion.addEventListener("blur", function () {
    cleanErrorFor(direccionControlError);
  });

localidad.addEventListener("blur", function () {
    cleanErrorFor(locControlError);
  });

cp.addEventListener("blur", function () {
    cleanErrorFor(cpControlError);
  });

email.addEventListener("blur", function () {
    checkInputs(emailControlError);
  });

pass.addEventListener("blur", function () {
    checkInputs(passwordControlError);
  });

pass2.addEventListener("blur", function () {
    cleanErrorFor(password2ControlError);
  });
