function constanteKrape(n) 
{ 
    let contador = 0;
    while (n != 6174) 
    {
        let arreglo = n.toString().split('').sort();
        
        let asc = parseInt(arreglo.join(''));
        let des = parseInt(arreglo.reverse().join(''));
        
        while (des.toString().length < 4) { des *= 10; }
        n = Math.abs(asc - des);
        contador++;
        if (contador > 999) break;
    }
    return contador;
}
console.log(constanteKrape(9831));