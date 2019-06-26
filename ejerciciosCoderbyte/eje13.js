function MaximalSquare(cad) { 

    let tamMaxP = 0;

    cad.forEach((row, rowIndex) => 
    {
        row.split('').forEach((col, colIndex) => 
        {
            const maxPossibleSquareSize = Math.min(cad.length - rowIndex,cad[0].length - colIndex);
            for (let tam = 1; tam <= maxPossibleSquareSize; tam++) 
            {
                if (isSquare(cad, colIndex, rowIndex, tam) && tam > tamMaxP) 
                {
                    tamMaxP = tam;
                }
            }
        });
    });

    return tamMaxP * tamMaxP;
}
function isSquare(matriz, x, y, tamSquare) 
{
    for (let row = y; row < y + tamSquare; row++) 
    {
        for (let col = x; col < x + tamSquare; col++) 
        {
            if (matriz[row][col] === '0') {return false;}
        }
    }
    return true;
}
console.log(MaximalSquare(["0111", "1111", "1111", "1111"]));
