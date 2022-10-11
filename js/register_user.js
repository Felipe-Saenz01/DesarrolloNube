import { registerUser } from "../js/firebase.js";

const evento = document.getElementById("registerbtn");

async function register(){
    const user = document.getElementById("edtUser");
    const pass = document.getElementById("edtPass");
    const confirmUser = document.getElementById("edtConfirmUser");
    const confirmPass = document.getElementById("edtConfirmPass");
    const alerta = document.getElementById("alert")
    
    if(user.value === '' || confirmUser.value === '' || pass.value === '' || confirmPass.value === ''){
        alerta.classList.remove('d-none'); //funcion classList trae las difenretes clases de un elemento
	    alerta.innerText = 'Debe diligenciar todos los campos.'; // innerText setea el texto de algun elemento
	    return;
    }
    
    if(user.value != confirmUser.value){
        alerta.classList.remove('d-none'); //funcion classList trae las difenretes clases de un elemento
	    alerta.innerText = 'Los usuarios no coinciden.'; // innerText setea el texto de algun elemento
	    return;
    }

    if(pass.value != confirmPass.value){
        alerta.classList.remove('d-none'); //funcion classList trae las difenretes clases de un elemento
	    alerta.innerText = 'Las Contraseñas no coinciden.'; // innerText setea el texto de algun elemento
	    return;
    }
    if(pass.value.length < 6){
        alerta.classList.remove('d-none'); //funcion classList trae las difenretes clases de un elemento
	    alerta.innerText = 'Las Contraseñas deben tener minimo 6 caracteres.'; // innerText setea el texto de algun elemento
	    return;
    }

    alerta.classList.add('d-none'); // vuelve a ocultar la alerta
    
    const registro = registerUser(user.value,pass.value);

    const validation = await registro;

    if (validation != null) {
        alert("User register succesfull: "+user.value);
        window.location.href="../index.html";
    }else{
        console.log("Error ");
        alert("Error al Ingresar");
    }

}

window.addEventListener('DOMContentLoaded', async()=>evento.addEventListener('click',register))