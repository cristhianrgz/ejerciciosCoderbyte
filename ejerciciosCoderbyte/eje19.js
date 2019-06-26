function enemyCercano(cad) 
{ 
    let hY = -1;
    let hX = -1;
    for (let i = 0; i < cad.length; i++) 
    {
        let resul = cad[i].indexOf(1);
        if (resul > -1) {
            hX = resul;
            hY = i;
        }
    }
    
    if (hY === -1) {return -1;} //no existe 
    let enemy = [];
    for (let i = 0; i < cad.length; i++) 
    {
        let resul = cad[i].indexOf(2);
        if (resul > -1) {
            enemy.push([i,resul]);
        }
    }
    if (enemy.length === 0) {return 0;}
    let cerrDistancia = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < enemy.length; i++) {
        let enemyX = enemy[i][1];
        let enemyY = enemy[i][0];
        
        let dX = Math.abs(enemyX - hX);
        let dY = Math.abs(enemyY - hY);
        let wDX = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < dX; i++) { if ((enemyX + i) % cad[0].length === hX) {wDX = i;}}
        
        let wDY = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < dY; i++) {if ((enemyY + i) % cad.length === hY) {wDY = i;}}
        
        dX = (wDX < dX) ? wDX : dX;
        dY = (wDY < dY) ? wDY : dY;
        let dista = dX + dY;
        if (dista < cerrDistancia) {cerrDistancia = dista;
        }
    }
    return cerrDistancia;  
}
console.log(enemyCercano(["000", "100", "200"]));