function tableroAjedrez(cad) 
{ 
    let x = cad[1];
    let y = cad[3];
    let a = cad[6];
    let b = cad[8];
    let maDX = a - x;
    let maDY = b - y;
    
    let dista = maDX + maDY;
    let rutasT = [];
    for (let i = 0, max = Math.pow(2, dista); i < max; i++) 
    {
        let f = i.toString(2);
        while (f.length < dista) {f = '0' + f;}
        rutasT.push(f);
    }
    let validarRutas = [];
    for (let i = 0; i < rutasT.length; i++) 
    {
        if (rutasValidas(cad, rutasT[i])) 
        {
            validarRutas.push(rutasT[i])
        }
    }
    return validarRutas.length;
}
console.log(tableroAjedrez("(1 1)(3 3)"));                           

function rutasValidas(cad, ruta) {
    let x = cad[1];
    let y = cad[3];
    let a = cad[6];
    let b = cad[8];
    let maDX = a - x;
    let maDY = b - y;
    let dX = 0;
    let dY = 0;
   for (let i = 0; i < ruta.length; i++)
    {
        if (ruta[i] === '0') { dX++;}
        if (ruta[i] === '1') {dY++;}
   }
   if (parseInt(x) + parseInt(dX) === parseInt(a) && parseInt(y) + parseInt(dY) === parseInt(b)) 
   {
       return true;
   } 
   else 
   {
       return false;
   } 
    
}