import { loginValidation } from "../js/firebase.js";

const evento = document.getElementById("loginbtn");

async function login(){
    const user = document.getElementById("edtUser").value;
    const pass = document.getElementById("edtPass").value;
    /*
    console.log(user);
    console.log(pass);
    */
    const sesion = loginValidation(user,pass);

    const validation = await sesion;

    if (validation != null) {
        alert("User authentication: "+user);
        window.location.href="../plantillas/home.html";
    }else{
        console.log("Error ");
        alert("Error al Ingresar");
    }
}

window.addEventListener('DOMContentLoaded', async()=>evento.addEventListener('click',login))