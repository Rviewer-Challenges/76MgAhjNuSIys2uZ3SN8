import '../sass/app.scss';
import './components/themes';
import show_menu from './components/menu';
import Game from './components/game';
import set_history_content from './components/history';

var game = null;

show_menu();

function start_game() {
	let name = document.getElementById('name').value;
	if (name.trim().length > 0) {
		document.getElementById('game-menu').style.display = 'none';
		document.getElementById('game-controls').style.display = 'flex';
		let level = document.querySelector('input[name="mode"]:checked').value;
		game = new Game(name, level);
		game.start();
		document.getElementById('game-menu').innerHTML = '';
	} else {
		document.getElementById('name').classList.add('error');
		document.getElementById('name').focus();
	}
}

function show_card(id) {
	if (game.can_open()) {
		game.show_card(id);
	}
}

function show_history() {
	set_history_content();
}

function quit_game(){
	game.quit();
}

window.show_card = show_card;
window.start_game = start_game;
window.show_history = show_history;
window.show_menu = show_menu;
window.quit_game = quit_game;
