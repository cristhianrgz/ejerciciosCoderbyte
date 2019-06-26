function FirstReverse(cad) { 
    let Ncad = '';
    for (let i = cad.length-1; i >= 0; i--) {
        Ncad += cad[i];
    }
    return Ncad;       
}

console.log(FirstReverse("Hola"));