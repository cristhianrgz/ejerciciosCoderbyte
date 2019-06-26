function preguntas(cad) 
{
	let nLugares = [];
	let bandera = false;
    for (let i = 0, len = cad.length; i < len; i++) 
    {
		if (/\d/.test(cad[i])) {nLugares.push(i);}
	}
	let contador = nLugares.length;

    for (let i = 0; i < contador - 1; i++) 
    {
        if (parseInt(cad[nLugares[i]], 10) + parseInt(cad[nLugares[i + 1]], 10) === 10) 
        {
			bandera = true;
			let cad2 = cad.slice(nLugares[i], nLugares[i + 1]);

			cad2 = cad2.replace(/[^\?]/g, '');
			if (cad2 !== '???') {
				return false;
			}
		}
	}
	return bandera;
}
console.log(preguntas("aa6?9"));