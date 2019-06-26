function AlternarLetra(cad) 
{ 
    cad= cad.replace(/[a-zA-Z]/g,function(remp) 
    {
      if (remp =='z') return 'a';
        else if (remp == 'Z') return 'A';
              else return String.fromCharCode(remp.charCodeAt(0) + 1);
    });
   
    return cad.replace(/[aeiou]/g, function(remp) 
    {
      return remp.toUpperCase();
    });
}
console.log(AlternarLetra("Uriel")); 
