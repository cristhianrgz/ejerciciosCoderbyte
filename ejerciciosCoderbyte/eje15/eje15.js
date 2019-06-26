function rutaCorrecta(cad) 
{
	let arreglo = [];
	cad.split('').forEach((car, ind) => {
		if (car === '?') {
			arreglo.push(ind);
		}
	});
	let n = arreglo.length;
	let total = Math.pow(4, n);
    for (let i = 0; i < total; i++) 
    {
		let nCad = (i + total).toString(4).slice(1);
		let cRuta = createPath(cad, arreglo, nCad);
		if (isPathGood(cRuta)) {return cRuta;}
	}
}
isPathGood = (cad1) => 
{
	let arregloTes = []
	for (let i = 0; i < 5; i++) {arregloTes.push([0, 0, 0, 0, 0])}
	let len = cad1.length;
	let cLoc = [0, 0];

    for (let i = 0; i < len; i++) 
    {
		arregloTes[cLoc[0]][cLoc[1]] = 1;
		let nuLoc = cLoc.slice(0);
        switch (cad1[i]) 
        {
			case 'u':
				nuLoc[0]--;
				break;
			case 'd':
				nuLoc[0]++;
				break;
			case 'r':
				nuLoc[1]++;
				break;
			case 'l':
				nuLoc[1]--;
				break;
		}
        if (nuLoc.includes (-1) || nuLoc.includes (5)) {return false;}
		if (arregloTes[nuLoc[0]][nuLoc[1]] === 1) {return false;}
		if (nuLoc[0] === 4 && nuLoc[1] === 4 && i === len - 1) {return true;}
		cLoc = nuLoc;
	}
	return false;
};
createPath = (cad2, bla, n) => {
	let moverArreglo = ['r', 'l', 'u', 'd'];
	cad = cad2.split('');
	bla.forEach((valor, ind) => {
		cad.splice(valor, 1, moverArreglo[n[ind]]);
	});
	return cad.join('');
};
console.log(rutaCorrecta("???rrurdr?"));