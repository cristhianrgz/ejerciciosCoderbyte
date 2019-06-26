function ordenarAlfabe(cadena) 
{ 
    let letras = cadena.split('');
    return letras.sort().join('');
         
}
console.log(ordenarAlfabe("cristhian"));