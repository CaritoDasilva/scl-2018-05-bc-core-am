window.onload = function () {
    /*BOTONES*/

    const nameBtn = document.getElementById("aceptaName");
    const claveBtn = document.getElementById("cifradoAceptar");
    const cifrarBtn = document.getElementById("enviarMensaje");
    const decoBtn = document.getElementById("enviarMensaje2");


    let txtCifrado = document.getElementById("cifrado").value;
    let secretMsn = document.getElementById("mensajeSecreto").value;
    let cifradoMsn = document.getElementById("mensajeCifrado").value;

    /*Lista de Invitados (Array)*/

    let guests = ["Carolina", "Valeska", "Barbara", "Evelyn", "CarolinaD", "Marcia", "Alexandra"];
    let welcomeTXT = document.getElementById("welcome");


    /*Voy a llamar al botón de nombre de usuario*/
    nameBtn.addEventListener("click", function() {
        let welcomeTXT = document.getElementById("welcome");
        let nameUser = document.getElementById("inputName").value;
        let nameUser2 = document.getElementById("inputName");
        /*aquí le digo al botón que después que se haga click desaparezca para que solo me quede el nombre*/
        nameBtn.style.display = "none";
        nameUser2.style.display = "none";
        welcomeTXT.innerHTML = "Hol@ " + nameUser;
   
    
    });

    /*Voy a llamar al botón de la clave (número de posicionamiento)*/
    claveBtn.addEventListener("click",function(){
        
    })
}