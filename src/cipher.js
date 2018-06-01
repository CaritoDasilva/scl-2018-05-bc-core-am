window.cipher = {
  encode: (secretMsn, txtCifrado) => {
    let message = "";
    for(let i = 0; i < secretMsn.length; i++) {
      let ascii = ((secretMsn.charCodeAt(i) - 65 + parseInt(txtCifrado)) % 26 + 65);
      if(secretMsn.charCodeAt(i) === 32) {
        ascii = " ";
        message += " ";
      }
    message += String.fromCharCode(ascii);
          }
    return message; 
  },
  decode: (cifradoMsn, txtCifrado) => {
    let messageReturn = "";
    for(let i = 0; i < cifradoMsn.length; i++) {
      let alphabet = ((cifradoMsn.charCodeAt(i) + 65 - parseInt(txtCifrado)) % 26 + 65);
      if (cifradoMsn.charCodeAt(i) === 32) {
        alphabet = " ";
        messageReturn += " ";
      }
      messageReturn += String.fromCharCode(alphabet);
      
    }
    return messageReturn;
    
  
  }
}