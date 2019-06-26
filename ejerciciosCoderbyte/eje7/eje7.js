function simbolosCad(cad) 
{ 

    if (/^[a-zA-Z]/.test(cad) || /[a-zA-Z]$/.test(cad)) 
    {
        return false;
    }
    else if (/[^+][a-zA-Z]/.test(cad) || /[a-zA-Z][^+]/.test(cad)) 
    {
        return false;
    }
    else 
    {
     return true; 
    }
           
}
console.log(simbolosCad("+d+=3=s"));