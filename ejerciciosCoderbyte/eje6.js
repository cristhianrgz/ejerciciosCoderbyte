function Pmayuscula(cad) 
{ 
  
    var letras = cad.split(" ");
    for (i = 0; i<letras.length; i++) 
    {
      letras[i]=letras[i].substring(0,1).toUpperCase()+letras[i].substring(1);
    }
    return letras.join(" ");
           
  }  
  console.log(Pmayuscula("cristhian rodriguez"));