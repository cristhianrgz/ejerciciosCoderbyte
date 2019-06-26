function compaNum(n1,n2) { 

    if (n2 > n1) 
    {
        return true;
    }
    else if (n1 === n2) 
    {
        return '-1';
    } 
    else 
    {
        return false;
    }
         
}
console.log(compaNum(100,10));