window.cipher = {
  encode: (secretMsn, txtCifrado) => {
    let message = " ";
    for(let i = 0; i < secretMsn.length; i++) {
      let ascii = secretMsn.charCodeAt(i) - 65 + txtCifrado % 26 + 65;
      message += String.fromCharCode(ascii);
      
    }
    return message;
    console.log(message);
  
  },
  decode: (cifradoMsn, txtCifrado) => {
    let messageReturn = " ";
    for(let i = 0; i < cifradoMsn.length; i++) {
      let alphabet = cifradoMsn.charCodeAt(i) + 65 - txtCifrado % 26 - 65;
      messageReturn += String.fromCharCode(alphabet);
    }
    return messageReturn;
    console.log(messageReturn);
  }
}