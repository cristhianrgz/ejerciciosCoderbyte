function balanceoCarga(cad) 
{
    let nArreglo = cad.map(valor => 
    {
		return valor.replace(/[\[\]]/g, "").split(',').map(valor2 => {
			return parseInt(valor2, 10);
		}).sort((a, b) => {return a - b;});
	});
	
	let dife = nArreglo[0][1] - nArreglo[0][0];
	let medidas = nArreglo[1];
	if (medidas.includes(dife)) {return dife.toString();}
	let medidas1 = medidas.find((valor, ind) => {
		let nMedidas = medidas.slice(0);
		nMedidas.splice(ind, 1);
		return nMedidas.includes (dife - valor)
	});
	if (medidas1) {return `${medidas1},${dife - medidas1}`}
	medidas1 = medidas.find(valor => {
		return medidas.includes(dife + valor);
	});
	if (medidas1) {
		return `${medidas1},${dife + medidas1}`
	}
	return `no es posible`;
}
console.log(balanceoCarga(["[3, 4]", "[1, 2, 7, 7]"]));