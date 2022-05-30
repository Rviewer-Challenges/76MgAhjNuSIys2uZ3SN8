function create_table() {
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tr_head = document.createElement('tr');
	let th = document.createElement('th');

	// 1
	th.appendChild(document.createTextNode('Usuario'));
	tr_head.appendChild(th);

	// 2
	th = document.createElement('th');
	th.appendChild(document.createTextNode('Nivel'));
	tr_head.appendChild(th);

	// 3
	th = document.createElement('th');
	th.appendChild(document.createTextNode('Puntaje'));
	tr_head.appendChild(th);

	// 4
	th = document.createElement('th');
	th.appendChild(document.createTextNode('Tiempo'));
	tr_head.appendChild(th);

	// 5
	th = document.createElement('th');
	th.appendChild(document.createTextNode('Movimientos'));
	tr_head.appendChild(th);

	thead.appendChild(tr_head);
	table.appendChild(thead);

	return table;
}

function set_history_content() {
	document.getElementById('game-menu').style.display = 'none';
	document.getElementById('game-controls').style.display = 'none';
	document.getElementById('board').innerHTML = '';
	document.getElementById('board').removeAttribute('class');
	const storage = window.localStorage;
	let table = create_table();
	let history = storage.getItem('history');
	if (history) {
		history = JSON.parse(history);
		let tbody = document.createElement('tbody');
		history.forEach((record) => {
			let tr = document.createElement('tr');
			// 1
			let td = document.createElement('td');
			td.appendChild(document.createTextNode(record.user));
			tr.appendChild(td);

			// 2
			td = document.createElement('td');
			td.appendChild(document.createTextNode(record.level));
			tr.appendChild(td);

			// 3
			td = document.createElement('td');
			td.appendChild(document.createTextNode(record.score));
			tr.appendChild(td);

			// 4
			td = document.createElement('td');
			td.appendChild(document.createTextNode(60 - record.time + ' seg'));
			tr.appendChild(td);

			// 5
			td = document.createElement('td');
			td.appendChild(document.createTextNode(record.movements));
			tr.appendChild(td);

			tbody.appendChild(tr);
		});
		table.appendChild(tbody);
	} else {
		let tbody = document.createElement('tbody');
		let tr = document.createElement('tr');
		let td = document.createElement('td');
		td.appendChild(document.createTextNode('No hay registros'));
		td.colSpan = 5;
		tr.appendChild(td);
		tbody.appendChild(tr);
		table.appendChild(tbody);
	}

	let div = document.createElement('div');
	let button = document.createElement('button');
	button.appendChild(document.createTextNode('Limpiar'));
	button.onclick = () => {
		storage.removeItem('history');
		show_menu();
	};
	let back_button = document.createElement('button');
	back_button.appendChild(document.createTextNode('Volver'));
	back_button.onclick = () => {
		show_menu();
	};

	div.appendChild(back_button);
	div.appendChild(button);

	let history_content = document.createElement('div');
	history_content.classList.add('history__table__container');
	history_content.appendChild(table);

	document.getElementById('history').appendChild(history_content);
	document.getElementById('history').appendChild(div);
	document.getElementById('history').style.display = 'flex';
}

export default set_history_content;
