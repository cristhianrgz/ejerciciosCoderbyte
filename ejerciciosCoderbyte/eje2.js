function Firstfactorial(n) 
{ 
    let f = 1; 
    for (let i = 1; i <= n; i++)
    {
        f *= i;  
    } 
    return f;       
}                
console.log(Firstfactorial(6)); 