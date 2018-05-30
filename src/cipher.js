window.cipher = {
  encode: (secretMsn, txtCifrado) => {
    let message = " ";
    for(let i = 0; i < secretMsn.length; i ++) {
      let x = secretMsn.chartCodeAt(i);
      let ascii = ((x - 65 + txtCifrado) % 26 + 65);
      message += String.fromCharCode(ascii);
      //if((x.chartCodeAt(0)>=65) && (x.chatCodeAt(0)<=90)) {
    }
    return message;
    
  
  },
  decode: () => {
    /* Acá va tu código */
  }
}