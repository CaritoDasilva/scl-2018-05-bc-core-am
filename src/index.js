window.onload = function () {
	/*BOTONES*/

	const nameBtn = document.getElementById("aceptaName");
	const claveBtn = document.getElementById("cifradoAceptar");
	const cifrarBtn = document.getElementById("enviarMensaje");
	const decoBtn = document.getElementById("enviarMensaje2");


	let txtCifrado = document.getElementById("cifrado").value;
	let secretMsn = document.getElementById("mensajeSecreto").value.toUpperCase();
	let cifradoMsn = document.getElementById("mensajeCifrado").value;
	let nameUser = document.getElementById("inputName").value;


	/*Voy a llamar al botón de nombre de usuario*/

	nameBtn.addEventListener("click", function () {
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

    /*Voy a llamar al botón de la clave (número de posicionamiento)*/
    claveBtn.addEventListener("click", function () {
      let txtCifrado = document.getElementById("cifrado").value;
      let txtCifrado2 = document.getElementById("cifrado");
      const wordClave = document.getElementById("clave");
      txtCifrado2.style.display = "none";
      claveBtn.style.display = "none";
      wordClave.style.display = "none";
    });

	/*Aquí voy a llamar el boton que cifra el mensaje para ponerlo funcional*/
	cifrarBtn.addEventListener("click", function () {
		let secretMsn = document.getElementById("mensajeSecreto").value.toUpperCase();
		let secretMsn2 = document.getElementById("mensajeSecreto");
		let txtCifrado = document.getElementById("cifrado").value;
		const wordMsn1 = document.getElementById("msn1");
		let txtCifrado2 = document.getElementById("cifrado");
		secretMsn2.style.display = "none";
		cifrarBtn.style.display = "none";
		wordMsn1.style.display = "none";
		let finalMessage = window.cipher.encode(secretMsn, txtCifrado);
		document.getElementById("mensajeCodificado").innerHTML = "<h2>Tu mensaje cifrado:</h2>" + finalMessage;
	});

	/*Aquí voy a llamar al botón que descifra el mensaje*/
	decoBtn.addEventListener("click", function () {
		let cifradoMsn = document.getElementById("mensajeCifrado").value;
		let cifradoMsn2 = document.getElementById("mensajeCifrado");
		let txtCifrado = document.getElementById("cifrado").value;
		const wordMsn2 = document.getElementById("msn2");
		cifradoMsn2.style.display = "none";
		decoBtn.style.display = "none";
		wordMsn2.style.display = "none";
		let finalMessage2 = window.cipher.decode(cifradoMsn, txtCifrado);
		document.getElementById("mensajeDecodificado").innerHTML = "<h2>Tu mensaje descifrado:</h2>" + finalMessage2;
	});


}