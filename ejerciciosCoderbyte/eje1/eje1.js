function palMasLarga(n) 
{ 
  let a = n.match(/[a-z0-9]+/gi);
  let arreglo = a.sort(function(x, y)
  { 
    return y.length - x.length; 
  });
  return arreglo[0];         
} 
console.log(palMasLarga('Ingenieria en Sistemas'));