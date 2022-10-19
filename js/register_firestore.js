import { registerSetDoc } from "../js/firebase.js";

const form = document.getElementById("formFirestore");


/*window.addEventListener('DOMContentLoaded', async()=>{})
*/

form.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    const nombre = document.getElementById("edtName");
    const email = document.getElementById("edtEmail");
    const departamento = document.getElementById("edtDep");
    const ciudad = document.getElementById("edtCit");
    const direccion = document.getElementById("edtDir");

    registerSetDoc(nombre.value,email.value,departamento.value,ciudad.value,direccion.value);

    alert("Registro éxitoso");
    form.reset();


});