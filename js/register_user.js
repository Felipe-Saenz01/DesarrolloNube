import { registerUser, registerSetDoc } from "./firebase.js";
import { showAlert } from "./showAlert.js";

const Departamentos=[
    {nombre: "Bogotá DC", ciudades: ["Bogotá DC"]},
    {nombre: "Casanare", ciudades: ["Yopal","Aguazul", "Maní", "Tamara", "Monterrey"] },
    {nombre: "Cundinamarca", ciudades: ["Chocontá", "Funza", "Girardot", "Guaduas", "Jerusalén"]},
    {nombre: "Antioquia", ciudades: ["Medellín", "Abejorral", "Armenia", "Bello", "Ciudad Bolívar"]},
    {nombre: "Boyaca", ciudades: ["Tunja", "Duitama", "Sogamoso", "Socha", "Paipa"]}
]

const listaDepartamentos = document.getElementById("lsDepartamento");
const listaCiudades = document.getElementById("lsCiudad");

Departamentos.map(elemento =>{
    const option = document.createElement('option');
    option.value = elemento.nombre;
    option.text = elemento.nombre;
    option.id = elemento.nombre;
    listaDepartamentos.add(option);
})

window.addEventListener('DOMContentLoaded', () =>{
    listaDepartamentos.addEventListener("change", cargarCiudades);
})


function crearOption(valor){
    const option = document.createElement('option');
    option.value = valor;
    option.text = valor;
    return option;
}

function cargarCiudades(){
    Departamentos.map(elemento => {
        if(elemento.nombre === listaDepartamentos.options[listaDepartamentos.selectedIndex].value){
            listaCiudades.options.length =1;
            for (let a = 0; a < elemento.ciudades.length; a++) {
                listaCiudades.add(crearOption(elemento.ciudades[a])); 
            }
        }
    })
}



const form = document.getElementById("formRegister");

form.addEventListener('submit',(evento)=>{
    evento.preventDefault();

    const nombre = document.getElementById("edtUserName");
    const apellido = document.getElementById("edtApellido");
    const direccion = document.getElementById("edtDireccion");
    const genero = document.getElementById("edtGenero");
    const rhSelect = document.getElementById("lsRh");
    const rh = rhSelect.options[rhSelect.selectedIndex].value;
    const telefono = document.getElementById("edtTelefono");
    const lsdepartamento = document.getElementById("lsDepartamento");
    const departamento = lsdepartamento.options[lsdepartamento.selectedIndex].value;
    const lsciudad = document.getElementById("lsCiudad");
    const ciudad = lsciudad.options[lsciudad.selectedIndex].value;
    const email = document.getElementById("edtEmail");
    const confirmEmail = document.getElementById("edtConfirmEmail");
    const password = document.getElementById("edtPass");
    const confirmPassword = document.getElementById("edtConfirmPass");
    const imagen = document.getElementById("response");

    if(email.value != confirmEmail.value){
        showAlert("Los correos no coinciden.", "alert")
	    return;
    }

    if(password.value != confirmPassword.value){
        showAlert("Las contraseñas no coinciden.", "alert")
	    return;
    }

    registroAuth(nombre.value, apellido.value, direccion.value, genero.value, rh, telefono.value, departamento, ciudad, email.value, password.value, imagen.value);


});


async function registroAuth(nombre, apellido, direccion, genero, rh, telefono, departamento, ciudad, email,password, imagen){
    try {
        const autentication = await registerUser(email,password);
        showAlert("Usuario: "+autentication.user.email+", registrado.", "succes")
        registerSetDoc(nombre, apellido, direccion, genero, rh, telefono, departamento, ciudad, email,imagen);
        form.reset();
        
    } catch (error) {
        console.log(error.code);

        if( error.console === 'auth/email-already-in-use'){
            showAlert("El email ya se encuentra registrado.", "error")
        }else if(error.code === 'auth/invalid-email'){
            showAlert("El email es incorrecto o invalido.", "error")
        }else if(error.code === 'auth/weak-password'){
            showAlert("La contraseña es muy corta o debil.", "error")
        }
    }
}

