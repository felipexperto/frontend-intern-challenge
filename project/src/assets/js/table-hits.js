class createTableUrl {

	setup(appendId, args) {
		this.createTable(appendId, args);
		this.fillTable(args);
	};

	createTable(appendId, args) {

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

	createRow(item) {
		return `
			<tr>
				<td>
					<a class="item-url" href=" ${item.shortUrl} " title=" ${item.url} " target="_blank"> ${item.shortUrl} </a>
				</td>
			  	<td>
			  		<span class="item-hits"> ${Number(item.hits).toLocaleString('pt')} </span>
			  	</td>
			</tr>`;
	};

	appendRow (tabela, item) {
		var tr = document.createElement('tr'),
			trInnerHTML = this.createRow(item);

		tr.innerHTML = trInnerHTML;
		tabela.appendChild(tr);
	};

	fillTable(args) {

		axios.get('./assets/json/urls.json')
			.then((response) => {
				var tabela = document.getElementById(args.tableId);

				response.data.sort(function(a, b) {
					if (a.hits < b.hits)
						return 1;
					if (a.hits > b.hits)
						return -1;
					return 0;
				});

				for(let i = 0; i < 5; i++) {
					this.appendRow(tabela, response.data[i]);
				}
			})
			.catch(function (error) {
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
