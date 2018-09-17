function validarUrl(valor) {
	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
		regex = new RegExp(expression);

		if(valor.match(regex))
			return true;

		return false;
}

function avisoMensagem(elId, texto, args) {
	var span = document.createElement('span');
	span.innerHTML = texto;
	elId.appendChild(span);

	if (args.status == 'success') elId.classList.add('alert-success');
	if (args.status == 'error') elId.classList.add('alert-error');
	
	elId.classList.add('is-active');
}

function gerarUrlEncurtada() {
	this._sorteiaNumeroLetra = function() {
		return Math.floor(Math.random() * 2) === 0 ? this._gerarNumero() : this._gerarLetra();
	}
	this._gerarNumero = function() {
		return Math.floor(Math.random() * 10);
	}
	this._gerarLetra = function() {
		return String.fromCharCode(97+Math.floor(Math.random() * 26));
	}
	this._gerarHash = function(numeroDeCaracteres) {
		var hash = '';
		for (var i = 0; i <= numeroDeCaracteres; i++) {
			hash += this._sorteiaNumeroLetra();
		}
		return hash;
	}
	this._gerarHref = function() {
		var urlHostname = 'http://chr.dc/',
			urlHref = urlHostname + this._gerarHash(5);
		return urlHref;
	}
}

function copiarUrlEncurtada(input) {

	input.focus();
  	input.select();
	try {
	    var successful = document.execCommand('copy');
	} catch(e) {
		console.log(e);
	}
}

function getUrlEncurtada(_self) {

	var inputEncurtar = document.getElementById('input-encurtar'),
		valorEncurtar = inputEncurtar.value,
		alertEncurtar = document.getElementById('alert-encurtar');

	if(_self.classList.contains('is-copiar')) {
		copiarUrlEncurtada(inputEncurtar);
		avisoMensagem(alertEncurtar, 'Link copiado com sucesso', { status: 'success' });
		return;
	}

	if(!_self.classList.contains('is-copiar')) {

		// valida url a ser encurtada
		if(validarUrl(valorEncurtar) === false) {
			avisoMensagem(alertEncurtar, 'url invalida', { status: 'error' });
			return;
		}

		// gera url encurtada
		var g = new gerarUrlEncurtada(),
			urlEncurtado = g._gerarHref();

		// atualizacao da view
		inputEncurtar.value = urlEncurtado;
		_self.classList.add('is-copiar');
	}

}



document.addEventListener("DOMContentLoaded", function() {

	var bD = browserDetect(),
		isMobile = bD.mobile,
		inputEncurtar = document.getElementById('input-encurtar');

	if (isMobile === false) inputEncurtar.focus();

	var btnEncurtar = document.getElementById('btn-encurtar');
	btnEncurtar.addEventListener("click", function(e) {
		e.preventDefault();
		getUrlEncurtada(this);
	});
});