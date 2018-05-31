window.onload = function () {
    /*BOTONES*/

    const nameBtn = document.getElementById("aceptaName");
    const claveBtn = document.getElementById("cifradoAceptar");
    const cifrarBtn = document.getElementById("enviarMensaje");
    const decoBtn = document.getElementById("enviarMensaje2");


    let txtCifrado = document.getElementById("cifrado").value;
    let secretMsn = document.getElementById("mensajeSecreto").value.toUpperCase();

    let cifradoMsn = document.getElementById("mensajeCifrado").value;

    /*Lista de Invitados (Array)*/

    
    let nameUser = document.getElementById("inputName").value;


    /*Voy a llamar al botón de nombre de usuario*/
            
    nameBtn.addEventListener("click", function() {
    
        let welcomeTXT = document.getElementById("welcome");
        let nameUser = document.getElementById("inputName").value;
        let nameUser2 = document.getElementById("inputName");
        const questionName = document.getElementById("qname");
        /*aquí le digo al botón que después que se haga click desaparezca para que solo me quede el nombre*/
        nameBtn.style.display = "none";
        nameUser2.style.display = "none";
        questionName.style.display = "none";
        welcomeTXT.innerHTML = "Hol@ " + nameUser;
    });
            
        
 /*Aquí voy a llamar el boton que cifra el mensaje para ponerlo funcional*/
    cifrarBtn.addEventListener("click",function() {
        let secretMsn = document.getElementById("mensajeSecreto").value.toUpperCase();
        let secretMsn2 = document.getElementById("mensajeSecreto");
        let txtCifrado = document.getElementById("cifrado").value;
        const wordMsn1 = document.getElementById("msn1");
        secretMsn2.style.display = "none";
        cifrarBtn.style.display = "none";
        wordMsn1.style.display = "none";
        let finalMessage = window.cipher.encode(secretMsn, txtCifrado);
        (document.getElementById("mensajeCodificado").innerHTML) = "<p>Hola</p>" + finalMessage;
        
        

    });
    /*Aquí voy a llamar al botón que descifra el mensaje*/
    decoBtn.addEventListener("click", function() {
        let cifradoMsn = document.getElementById("mensajeCifrado").value;
        let cifradoMsn2 = document.getElementById("mensajeCifrado");
        const wordMsn2 = document.getElementById("msn2");
        cifradoMsn2.style.display = "none";
        decoBtn.style.display = "none";
        wordMsn2.style.display = "none";
    });

}
