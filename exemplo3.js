function Init() { //Função inicial
	
	//Cria os vários retângulos
	for (var i = 0; i < 20; i++) { //Loop for
		var div = document.createElement("div"); //Cria um div
		document.body.appendChild(div); //Adiciona o div à página
	}
	
	var divs = document.querySelectorAll("div"); //Array com todos os divs
	
	for (var i in divs) { //Loop for in
		divs[i].onclick = function(evt) { //Event listener, executa o código entre {} quando é clicado
			evt.target.style.backgroundColor = corAleatoria(); //Event handler, altera a cor do div clicado
		}
	}
}

function corAleatoria() { //Gera uma cor aleatória através de 3 números aleatórios
	return "rgb(" + numAleatorio(255) + "," + numAleatorio(255) + "," + numAleatorio(255) + ")"; 
}

function numAleatorio(numMax) { //Gera um numero aleatório entre 0 e numMax inclusive
	return Math.floor(Math.random()*(numMax+1)); 
}



