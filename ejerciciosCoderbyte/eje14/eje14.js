function numeroPentagonal(n) { 
    let dtotal = 1;
    for (let i = 1; i <= n; i++)
    {
        dtotal += ((i-2)*5 + 5);
    }
    return dtotal;
}
console.log(numeroPentagonal(5));