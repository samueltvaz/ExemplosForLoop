function Init() { //Função inicial

	//Cria um objeto (pessoa);
	var pessoa = {primeiroNome:"João", ultimoNome:"Silva", altura:"1.75", anoNascimento:"2000"}; 
	
	
	var texto = ""; //Guarda o texto
	
	//For in
	for (var i in pessoa) { 
		texto += pessoa[i] + " "; //Adiciona o valor da propriedade ao texto
	}	
	
	//Escreve o valor na página
	document.body.innerHTML += texto;
}