function ochoReynas(cad) 
{
    let nArreglo = cad.map(valor => {
      return JSON.parse(valor
        .replace(/\(/g, '[')
        .replace(/\)/g, ']')
      )
    });
  
    nArreglo = nArreglo.map(valor => {
      return valor.concat(valor[1] - valor[0], valor[1] + valor[0]);
    });
  
    for (let i = 0, len = nArreglo.length; i < len; i++) 
    {
      for (let j = 0; j < 4; j++) 
      {
        let carta = nArreglo[i][j];
        if (nArreglo.filter(valor => {
          return valor[j] === carta;
        }).length > 1) {
          return `(${nArreglo[i].slice(0,2)})`
        }
      }
    }
  
    return true;
  }
  console.log(ochoReynas(["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"]));