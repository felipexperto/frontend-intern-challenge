function createTableUrl() {

	var _self = this;

	_self.setup = function(appendId, args) {
		_self.createTable(appendId, args);
		_self.fillTable(args);
	};

	_self.createTable = function(appendId, args) {

		var wrTabela = document.getElementById(appendId),
			tabela = document.createElement('table');

		if(wrTabela === null) 
			throw new Error('Declare um elemento válido para receber o append da tabela.');

		if(typeof args.tableId !== 'string' || args.tableId === '') {
			args.tableId = appendId + '-tabela';
			console.warn('Um ID válido para tabela não foi declarado. O id: "'+ args.tableId +'" foi adicionado automaticamente.');
		}
		tabela.id = args.tableId;

		if(args.tableClass !== undefined) {
			args.tableClass.forEach(function(item) {
				tabela.classList.add(item);
			});
		}

		wrTabela.appendChild(tabela);
	};

	_self.createRow = function(item) {
		return ''+
			'<tr>'+
				'<td>'+
					'<a class="item-url" href="'+ item.shortUrl +'" title="'+ item.url +'" target="_blank">'+ item.shortUrl +'</a>'+
				'</td>'+
			  	'<td>'+ 
			  		'<span class="item-hits">'+ Number(item.hits).toLocaleString('pt') +'</span>'+
			  	'</td>'+
			'</tr>';
	};

	_self.appendRow = function(tabela, item) {
		var tr = document.createElement('tr'),
			trInnerHTML = _self.createRow(item);

		tr.innerHTML = trInnerHTML;
		tabela.appendChild(tr);
	};

	_self.fillTable = function(args) {
		axios.get('./assets/json/urls.json')
			.then(function (response) {
				// sucesso
				var tabela = document.getElementById(args.tableId);

				response.data.sort(function(a, b) {
					if (a.hits < b.hits)
						return 1;
					if (a.hits > b.hits)
						return -1;
					return 0;
				});

				for(i = 0; i < 5; i++) {
					_self.appendRow(tabela, response.data[i]);
				}
			})
			.catch(function (error) {
				// erro
				console.log(error);
			})
			.then(function () {
				// sempre executado
			});
	};
}

document.addEventListener("DOMContentLoaded", function() {
	var c = new createTableUrl();
	c.setup('top5', {
		 tableId : 'top5-tabela',
		 tableClass : ['table-responsive', 'table-hits']
	});
});
