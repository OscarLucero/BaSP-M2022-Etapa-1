const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const dni = document.getElementById('dni');
const fn = document.getElementById('fn');
const telefono = document.getElementById('telefono');
const direccion = document.getElementById('direccion');
const localidad = document.getElementById('localidad');
const cp = document.getElementById('cp');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');
const formControlError = document.querySelector(".form-control");

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const dniValue = dni.value.trim();
    const fnValue = fn.value.trim();
    const telefonoValue = telefono.value.trim();
    const direccionValue = direccion.value.trim();
    const localidadValue = localidad.value.trim();
    const cpValue = cp.value.trim();
	const emailValue = email.value.trim();
	const passValue = pass.value.trim();
	const pass2Value = pass2.value.trim();


	
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
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
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
