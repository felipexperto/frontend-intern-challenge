class encurtadorComponents {

	constructor() {
		
	}

	copiarUrlEncurtada(input) {

		input.focus();
	  	input.select();
		try {
		    var successful = document.execCommand('copy');
		} catch(e) {
			console.log(e);
		}
	}

	alertResetView(alert, btn, input) {
		var el = alert.querySelector('a');
		el.addEventListener('click', function() {
			alert.classList.remove('is-active');
			alert.children[0].remove();
			input.value = '';
			input.focus();
			btn.classList.remove('is-copiar');
		});
	}

	avisoMensagem(elId, texto, args) {
		var span = document.createElement('span');
		span.innerHTML = texto;
		elId.innerHTML = span.outerHTML;

		if (args.status == 'success') {
			elId.classList.remove('alert-error');
			elId.classList.add('alert-success');
		}
		if (args.status == 'error') {
			elId.classList.remove('alert-success');
			elId.classList.add('alert-error');
		}
		
		elId.classList.add('is-active');
	}


}