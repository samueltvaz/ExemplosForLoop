function Init() { //Função inicial
	var resultado = 0; //Guarda o valor do resultado
	var valorInicial = 0; //Guarda o valor inicial do somatório
	var valorFinal = 10; //Guarda o valor final do somatório
	
	//Escreve os valores iniciais e finais na página
	document.body.innerHTML += "Valor inicial = " + valorInicial + "<br>Valor final = " + valorFinal;
	
	//Loop for
	for (valorInicial; valorInicial <= valorFinal; valorInicial++) { 
		resultado += valorInicial; //Soma o valorInicial ao contador
	}
	
	//Adiciona o resultado à página
	document.body.innerHTML += "<br>Resultado = " + resultado;
}
