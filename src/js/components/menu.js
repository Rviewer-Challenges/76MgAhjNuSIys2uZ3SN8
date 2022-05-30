const menu_content =
	'<h1 class="screen__menu__title">Bienvenido</h1>' +
	'<div class="screen__menu__content">' +
	'<div class="screen__menu__data">' +
	'<label for="name">Ingresa tu nombre:</label>' +
	'<input type="text" name="name" id="name" />' +
	'</div>' +
	'<div class="screen__menu__level">' +
	'<label>Seleccione un nivel:</label>' +
	'<div class="screen__menu__level__options">' +
	'<div><input type="radio" name="mode" id="easy-mode" value="easy" checked/><label for="easy-mode">Fácil</label></div>' +
	'<div><input type="radio" name="mode" id="md-mode" value="medium" /> <label for="md-mode">Medio</label></div>' +
	'<div><input type="radio" name="mode" id="hard-mode" value="hard"/><label for="hard-mode">Difícil</label></div>' +
	'</div>' +
	'</div>' +
	'</div>' +
	'<div class="screen__menu__actions">' +
	'<button onclick="start_game()">Iniciar</button>' +
	'<button onclick="show_history()">Ver historial</button>' +
	'</div>';

function show_menu(){
	document.getElementById('game-controls').style.display = 'none';
	document.getElementById('board').innerHTML = '';
	document.getElementById('board').removeAttribute('class');
	document.getElementById('history').style.display = 'none';
	document.getElementById('history').innerHTML = '';
	document.getElementById('game-menu').innerHTML = menu_content;
	document.getElementById('game-menu').style.display = 'flex';
}

export default show_menu;