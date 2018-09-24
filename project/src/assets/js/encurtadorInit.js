document.addEventListener("DOMContentLoaded", function() {

	var bD = browserDetect(),
		isMobile = bD.mobile,
		inputEncurtar = document.getElementById('input-encurtar');

	if (isMobile === false) inputEncurtar.focus();

	var btnEncurtar = document.getElementById('btn-encurtar'),
		g = new encurtadorController();

	btnEncurtar.addEventListener("click", function(e) {
		e.preventDefault();
		g.getUrlEncurtada(this);
	});
});