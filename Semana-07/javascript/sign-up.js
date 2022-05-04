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
var	button = document.getElementById("boton");

button.addEventListener('click', submit);

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function submit(){
	var allisvalid = true;
	var data = {
        nameValue : document.getElementById('nombre').value,
        lastName : document.getElementById('apellido').value,
        dni : document.getElementById('dni').value,
        birthDate : document.getElementById('fn').value,
        phone : document.getElementById('telefono').value,
        address : document.getElementById('direccion').value,
        location : document.getElementById('localidad').value,
        code : document.getElementById('cp').value,
        email : document.getElementById('email').value,
        password : document.getElementById('pass').value,
        confPassword : document.getElementById('pass2').value,
    }
	if (!validateNameLastName(data.nameValue)) {
		alert("Invalid Name")
	}
	if (!validateNameLastName(data.lastName)) {
		alert("Invalid Last Name")
	}
	if (!validateDNI(data.dni)) {
		alert("Invalid Dni")
	}
	if (!validateLocation(data.location)) {
		alert("Invalid Location")
	}
	if (!validatePhone(data.phone)) {
		alert("Invalid Phone")
	}
	if (!validateAddress(data.address)) {
		alert("Invalid Address")
	}
	if (!isFullAge(data.birthDate)) {
		alert("Invalid Birth Day")
	}
	if (!validateCode(data.code)) {
		alert("Invalid CP")
	}
	if (!validateEmail(data.email)) {
		alert("Invalid Email")
	}
	if (!validatePassword(data.password)) {
		alert("invalid Password")
	}
	if (!validatePassword2(data.password,data.confPassword)) {
		alert("Password Not Match")
	}
	if (allisvalid) {
		data.birthDate = convertMDY(data.birthDate);
		registerRequest(data, 'https://basp-m2022-api-rest-server.herokuapp.com/signup')
	}
}
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

  function registerRequest(data, url){
    fetch(url + '?name=' + data.nameValue + '&lastName=' + data.lastName + '&dni=' + data.dni
    + '&dob=' + data.birthDate + '&phone=' + data.phone + '&address=' + data.address
    + '&city=' + data.locate + '&zip=' + data.code + '&email=' + data.email + '&password=' + data.password,{
        method : 'GET',
        params : {
            name : data.nameValue,
            lastName : data.lastName,
            dni : data.dni,
            dob : data.birthDate,
            phone : data.phone,
            address : data.address,
            city : data.location,
            zip : data.code,
            email : data.email,
            password : data.password
        }
    })
        .then(function(response){
            return response.json();
        })
        .then(function(jsonResponse){
            console.log(jsonResponse)
			alert (jsonResponse.msg);
            if (jsonResponse.success) {
                saveInLocalStorage(data);
            }
        })
        .catch(function(error){
            console.log(error);
        })
}
function saveInLocalStorage(data){
    localStorage.setItem('Name', data.nameValue);
    localStorage.setItem('Last Name', data.lastName);
    localStorage.setItem('DNI', data.dni);
    localStorage.setItem('Date of Birth', data.birthDate);
    localStorage.setItem('Phone', data.phone);
    localStorage.setItem('Address', data.address);
    localStorage.setItem('City', data.location);
    localStorage.setItem('Postal Code', data.code);
    localStorage.setItem('Email', data.email);
    localStorage.setItem('Password', data.password);
}
  function validateNameLastName(x) {
    var minLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var mayusLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var isValid = true;
    var name = x.toLowerCase();
    for (i = 0; i < name.length; i++) {
        if (!minLetters.includes(name[i]) && !mayusLetters.includes(name[i])) {
            isValid = false;
        }
    }
    if (name.length >= 3 && isValid) {

        return true;
    } else{

        return false;
    }
}
function validateDNI(dni, txtBoxes){
    var nums = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for (i = 0; i < dni.length; i++){
        if (!nums.includes(dni[i])) {
            isValid = false;
        }
    }
    if (dni.length >= 7 && isValid) {

        return true;
    }else {

        return false;
    }
}
function getTodayDate(){
    var dateInput = document.getElementById('date');
    var currentDate = new Date();
    var day = currentDate.getDate().toString();
    var month = currentDate.getMonth();
    month++;
    if (month < 10) {
        month = '0' + month;
    }
    month = month.toString();
    var year = currentDate.getFullYear().toString();
    var maxValue = year + '-' + (month) + '-' + day;
    dateInput.setAttribute('max', maxValue);
}
function isFullAge(date, txtBoxes){
    var dateInput = new Date(date);
    var thisMoment = new Date(Date.now());
    var isMajor = new Date(thisMoment - dateInput).getFullYear() - 1970 >= 18;
    if (isMajor) {

        return true;
    }else{

        return false;
    }
}
function convertMDY(date){
    var inputDate = new Date(date);
    var month = inputDate.getMonth();
    month++;
    if (month < 10) {
        month = '0' + month;
    }
    month = month.toString();
    var day = inputDate.getDate();
    day++;
    if (day < 10) {
        day = '0' + day;
    }
    day = day.toString();
    var year = inputDate.getFullYear().toString();
    date = month + '/' + day + '/' + year;
    return date;
}
function convertYMD(date){
    var inputDate = new Date(date);
    var month = inputDate.getMonth();
    month++;
    if (month < 10) {
        month = '0' + month;
    }
    month = month.toString();
    var day = inputDate.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    day = day.toString();
    var year = inputDate.getFullYear().toString();
    date = year + '-' + month + '-' + day;
    return date;
}
function validatePhone(phone){
    var nums = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for(i = 0; i < phone.length; i++){
        if (!nums.includes(phone[i])) {
            isValid = false;
        }
    }
    if (phone.length >= 10 && isValid) {

        return true;
    }else {

        return false;
    }
}
function validateAddress(address){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var space = ' ';
    var isValid = true;
    var char = [];
    for (i = 0; i < address.length; i++) {
        if (letters.includes(address[i])) {
            char.push('l');
            if (i !== 0 && char[(i-1)] === 'n') {
                isValid = false;
            }
        } else if (space === address[i]) {
            char.push('s');
        } else if (numbers.includes(address[i])) {
            char.push('n');
            if (i !== 0 && char[(i-1)] === 'l') {
                isValid = false;
            }
        }
    }
    if(address.length >= 5 && isValid){

        return true;
    } else{

        return false;
    }
}
function validateLocation(locate){
    var nums = ['0','1','2','3','4','5','6','7','8','9'];
    var minLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var mayusLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var locateLower = locate.toLowerCase();
    var numCount = 0;
    var lettMinCount = 0;
    var lettMayusCount = 0;
    var special = false;
    for (i = 0; i < locateLower.length; i++){
        if (nums.includes(locateLower[i])) {
            numCount++;
        }else if (minLetters.includes(locateLower[i])) {
            lettMinCount++;
        }else if (mayusLetters.includes(locateLower[i])) {
            lettMayusCount++;
        }else{
            special = true;
        }
    }
    if (locateLower.length >= 3 && !special) {

        return true;
    }else{

        return false;
    }
}
function validateCode(code){
    var nums = ['0','1','2','3','4','5','6','7','8','9'];
    var isValid = true;
    for (i = 0; i < code.length; i++) {
        if (!nums.includes(code[i])) {
            isValid = false;
        } 
    }
    if (code.length >= 4 && code.length <= 5 && isValid) {

        return true;
    }else {

        return false
    }
}
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
function validatePassword2(password, confPassword){
    if (password === confPassword) {

        return true;
    }else{

        return false;
    }
}
  
