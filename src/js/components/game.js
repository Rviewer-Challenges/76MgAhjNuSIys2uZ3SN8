import Card from './card';
import get_images from './images';

class Game {
	constructor(user, level) {
		this.user = user;
		this.level = level;
		this.score = 0;
		this.movements = 0;
		this.time = 60;
		this.cards = [];
		this.open_cards = [];
		this.in_game = false;
		this.max_score = 0;
	}

	start() {
		let n_cards;
		switch (this.level) {
			case 'easy':
				n_cards = 16;
				this.max_score = 8;
				break;
			case 'medium':
				n_cards = 24;
				this.max_score = 12;
				break;
			case 'hard':
				n_cards = 30;
				this.max_score = 15;
				break;
		}
		const images = get_images(n_cards);
		const board = document.getElementById('board');
		board.innerHTML = '';
		board.removeAttribute('class');
		board.classList.add(`board--${this.level}`);

		for (let i = 0; i < n_cards; i++) {
			let card = new Card(i, images[i]);
			board.appendChild(card.get_html_element());
			this.cards.push(card);
		}
		
		this.in_game = true;
		this.start_timer();
	}

	start_timer() {
		setTimeout(() => this.reduce_timer(), 1000);
	}

	reduce_timer() {
		this.time--;
		document.getElementById('game-time').innerHTML = '00:' + ('0' + this.time).slice(-2);
		if (this.time >= 1) {
			if (this.in_game) this.start_timer();
		} else {
			this.game_over();
		}
	}

	add_movement() {
		this.movements++;
		document.getElementById('game-movements').innerHTML = this.movements;
	}

	add_score() {
		this.score++;
		document.getElementById('game-score').innerHTML = this.score;
		if (this.score == this.max_score) this.game_over();
	}

	show_card(i) {
		if (this.open_cards[0] != this.cards[i]) {
			this.cards[i].reveal();
			this.open_cards.push(this.cards[i]);
			this.add_movement();
			if (this.open_cards.length == 2) this.compare();
		}
	}

	clean() {
		if (this.in_game) {
			let cards_tmp = this.open_cards;
			cards_tmp.forEach((card) => {
				card.hide();
			});
			this.open_cards = [];
		}
	}

	can_open() {
		return this.open_cards.length < 2;
	}

	compare() {
		if (this.open_cards.length == 2) {
			if (this.open_cards[0].get_image() == this.open_cards[1].get_image()) {
				this.open_cards[0].set_resolved();
				this.open_cards[1].set_resolved();
				this.add_score();
				this.clean();
			} else {
				setTimeout(() => this.clean(), 1500);
			}
		}
	}

	game_over() {
		this.in_game = false;
		const storage = window.localStorage;
		let history = storage.getItem('history');
		let es_lvl = '';
		switch (this.level) {
			case 'easy':
				es_lvl = 'Fácil';
				break;
			case 'medium':
				es_lvl = 'Medio';
				break;
			case 'hard':
				es_lvl = 'Difícil';
				break;
		}
		if (history) {
			history = JSON.parse(history);
			history.push({
				user: this.user,
				level: es_lvl,
				score: this.score,
				time: this.time,
				movements: this.movements,
			});
			storage.setItem('history', JSON.stringify(history));
		} else {
			history = [
				{
					user: this.user,
					level: es_lvl,
					score: this.score,
					time: this.time,
					movements: this.movements,
				},
			];
			storage.setItem('history', JSON.stringify(history));
		}
		this.reveal_all();
		setTimeout(() => {
			if(!this.prevent_history){
				show_history();
			}
		}, 5000);
	}

	reveal_all() {
		this.cards.forEach((card) => {
			card.reveal();
		});
	}

	quit() {
		if (this.in_game) {
			this.in_game = false;
			show_menu();
		} else {
			this.prevent_history = true;
			show_menu();
		}
	}
}

export default Game;
