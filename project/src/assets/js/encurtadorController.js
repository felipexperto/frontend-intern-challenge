class encurtadorController extends encurtadorComponents {

	constructor() {
		super();
		this.encurtadorGerarUrl = new encurtadorGerarUrl();
		this.alertEncurtar = document.getElementById('alert-encurtar');
		this.btnEncurtar   = document.getElementById('btn-encurtar');
		this.inputEncurtar = document.getElementById('input-encurtar');
	}

	validarUrl(valor) {
		var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
			regex = new RegExp(expression);

			if(valor.match(regex))
				return true;

			return false;
	}
			
	getUrlEncurtada(_self) {

		var valorEncurtar = this.inputEncurtar.value;

		// condicao == true, quer dizer que a tarefa
		// a ser executada eh COPIAR o link encurtado
		if(_self.classList.contains('is-copiar')) {
			this.copiarUrlEncurtada(this.inputEncurtar);
			this.avisoMensagem(this.alertEncurtar, 'Link copiado com sucesso. <a href="#" id="btn-encurtarnovamente">Encurtar outro link</a>.', { status: 'success' });
			this.alertResetView(this.alertEncurtar, this.btnEncurtar, this.inputEncurtar);
			return;
		}

		// condicao == false, quer dizer que a tarefa
		// a ser executada eh GERAR o link encurtado
		if(!_self.classList.contains('is-copiar')) {

			// valida url a ser encurtada
			if(this.validarUrl(valorEncurtar) === false) {
				this.avisoMensagem(this.alertEncurtar, 'Url inválida. <a href="#" id="btn-encurtarnovamente">Tentar novamente</a>.', { status: 'error' });
				this.alertResetView(this.alertEncurtar, this.btnEncurtar, this.inputEncurtar);
				return;
			}

			// gera url encurtada
			var urlEncurtado = this.encurtadorGerarUrl.gerarHref();

			// atualizacao da view
			this.inputEncurtar.value = urlEncurtado;
			this.inputEncurtar.classList.add('fadetext');
			this.alertEncurtar.classList.remove('is-active');
			_self.classList.add('is-copiar');
		}

	}

}