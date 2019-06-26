function convertirHoras(n) 
{ 
    var hora = Math.floor(n / 60);
    var minuto = n % 60;
    var cadena = "El resultado es " + hora + ":" + minuto;
    return cadena;
    
           
  }
console.log(convertirHoras(63));