class Card {
	constructor(id, image) {
		this.id = id;
		this.image = image;
		this.state = 'hidden';
	}

	get_html() {
		return `<div class="card" id="card-${this.id}" onclick="show_card(${this.id})"><svg role="img" class="card__logo"><use href="./assets/hacker.svg#img_hacker" /></svg></div>`;
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
			if(html_card){
				html_card.classList.remove('card--revealed');
				html_card.innerHTML = `<svg role="img" class="card__logo"><use href="./assets/hacker.svg#img_hacker" /></svg>`;
				html_card.classList.add('card--revealed');
				this.state = 'hidden';
			}
		}
	}
}

export default Card;
