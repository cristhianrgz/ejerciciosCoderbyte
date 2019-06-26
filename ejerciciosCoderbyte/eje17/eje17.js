function vocalesP(cad) 
{ 
    for (let row = 0; row < cad.length-1; row++) 
    {
        for (let col = 0; col < cad[0].length-1; col++) 
        {
            if (isVowels2x2(cad, row, col)) {return row + '-' + col;}
        }
    }
    return 'no funciono';
    function isVowels2x2(cad, row, col) {
        
        if (!isVowel(cad[row][col])) return false;
        if (!isVowel(cad[row+1][col])) return false;
        if (!isVowel(cad[row][col+1])) return false;
        if (!isVowel(cad[row+1][col+1])) return false;
        return true;
    }
    
    function isVowel(letra) {
        const vocales = 'aeiou';
        return vocales.includes(letra);
    }
}
console.log(vocalesP(["aqrst", "ukaei", "ffooo"]));