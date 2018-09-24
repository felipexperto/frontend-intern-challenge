class encurtadorGerarUrl {
	sorteiaNumeroLetra() {
		return Math.floor(Math.random() * 2) === 0 ? this.gerarNumero() : this.gerarLetra();
	}
	gerarNumero() {
		return Math.floor(Math.random() * 10);
	}
	gerarLetra() {
		return String.fromCharCode(97+Math.floor(Math.random() * 26));
	}
	gerarHash(numeroDeCaracteres) {
		var hash = '';
		for (var i = 0; i <= numeroDeCaracteres; i++) {
			hash += this.sorteiaNumeroLetra();
		}
		return hash;
	}
	gerarHref() {
		var urlHostname = 'http://chr.dc/',
			urlHref = urlHostname + this.gerarHash(5);
		return urlHref;
	}
}