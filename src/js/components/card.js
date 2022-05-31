import hacker_svg from '../../assets/hacker.svg';

class Card {
	constructor(id, image) {
		this.id = id;
		this.image = image;
		this.state = 'hidden';
	}

	create_svg() {
		const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.classList.add('card__logo');
		svg.setAttribute('role', 'img');

		const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
		use.setAttribute('href', `.${hacker_svg}#img_hacker`);

		svg.appendChild(use);

		return svg;
	}

	get_html_element() {
		const card = document.createElement('div');
		card.classList.add('card');
		card.setAttribute('id', `card-${this.id}`);
		card.setAttribute('onclick', `show_card(${this.id})`);

		card.appendChild(this.create_svg());

		return card;
	}

	get_image() {
		return this.image;
	}

	set_resolved() {
		this.state = 'resolved';
		const html_card = document.getElementById(`card-${this.id}`);
		html_card.classList.add('card--resolved');
	}

	reveal() {
		if (this.state == 'hidden') {
			const html_card = document.getElementById(`card-${this.id}`);
			html_card.innerHTML = `<div class="card__image" style="background-image: url('${this.image}')">`;
			html_card.classList.add('card--revealed');
			this.state = 'revealed';
		}
	}

	hide() {
		if (this.state == 'revealed') {
			const html_card = document.getElementById(`card-${this.id}`);
			if (html_card) {
				html_card.classList.remove('card--revealed');
				html_card.innerHTML = '';
				html_card.appendChild(this.create_svg());
				html_card.classList.add('card--revealed');
				this.state = 'hidden';
			}
		}
	}
}

export default Card;
