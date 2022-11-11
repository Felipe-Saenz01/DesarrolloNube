import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { showAlert } from "./showAlert.js";

    
//método para obtener datos especificos de firestore indicando nombre de la base de datos y el id o token
const getDetails = async (email) =>{
    const card = document.getElementById('cardInformacion');
    // Documento de referencia
    const docRef = doc(db, "DBusers", email);
    
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      // console.log("Document data:", docSnap.data().nombre);
      card.innerHTML=`
      <div class="card mb-9 text-bg-secondary" style="max-width: 540px;">
        <div class="row ">
          <div class="col-md-4">
            <img src="${docSnap.data().imagen}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${docSnap.data().nombre} ${docSnap.data().apellido}</h5>
              <p class="card-text">
                Email: ${docSnap.data().email}<br>
                Telefono: ${docSnap.data().telefono}<br>
                Genero: ${docSnap.data().genero}<br>
                RH: ${docSnap.data().rh}<br>
                Departamento: ${docSnap.data().departamento}<br>
                Ciudad: ${docSnap.data().ciudad}<br>
              </p>
              
            </div>
          </div>
        </div>
        <div class="card-footer text-center text-bg-secondary">
          Development Cloud
        </div>
      </div>
      `;
    } else {
      showAlert("No se encontrarón datos asociados a ese Email.", "error");
    }
    


}


const formulario = document.getElementById("BuscarRegistro");

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const email = document.getElementById('email');
    getDetails(email.value);
    
})
