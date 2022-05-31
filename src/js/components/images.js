import img_01 from '../../assets/img/580b57fcd9996e24bc43c325.png';
import img_02 from '../../assets/img/585964ef4f6ae202fedf285d.png';
import img_03 from '../../assets/img/580b57fcd9996e24bc43c320.png';
import img_04 from '../../assets/img/580b57fcd9996e24bc43c32a.png';
import img_05 from '../../assets/img/580b57fcd9996e24bc43c322.png';
import img_06 from '../../assets/img/585965744f6ae202fedf286a.png';
import img_07 from '../../assets/img/5859662e4f6ae202fedf2878.png';
import img_08 from '../../assets/img/585965444f6ae202fedf2865.png';
import img_09 from '../../assets/img/585965f24f6ae202fedf2873.png';
import img_10 from '../../assets/img/5859661d4f6ae202fedf2877.png';
import img_11 from '../../assets/img/580b57fcd9996e24bc43c321.png';
import img_12 from '../../assets/img/580b57fcd9996e24bc43c32d.png';
import img_13 from '../../assets/img/5859611e4f6ae202fedf2859.png';
import img_14 from '../../assets/img/585965ad4f6ae202fedf286e.png';
import img_15 from '../../assets/img/5859659b4f6ae202fedf286d.png';
import img_16 from '../../assets/img/580b57fcd9996e24bc43c31c.png';
import img_17 from '../../assets/img/58595e144f6ae202fedf284f.png';
import img_18 from '../../assets/img/585964e74f6ae202fedf285c.png';
import img_19 from '../../assets/img/585965e14f6ae202fedf2872.png';
import img_20 from '../../assets/img/580b57fcd9996e24bc43c32b.png';

const images = [
	img_01,
	img_02,
	img_03,
	img_04,
	img_05,
	img_06,
	img_07,
	img_08,
	img_09,
	img_10,
	img_11,
	img_12,
	img_13,
	img_14,
	img_15,
	img_16,
	img_17,
	img_18,
	img_19,
	img_20,
];

function generate_position(n) {
	let positions = [];
	for (let i = 0; i < n; i++) {
		positions.push(i);
	}
	return positions;
}

function get_random_position(positions) {
	let i = Math.floor(Math.random() * positions.length);
	let random = positions[i];
	positions.splice(i, 1);
	return [random, positions];
}

function get_random_images(n) {
	let positions = generate_position(n);
	let selected_images = [];
	let random;
	for (let i = 0; i < n; i++) {
		[random, positions] = get_random_position(positions);
		selected_images.push(images[random]);
	}
	return selected_images;
}

function get_images(n) {
	let positions = generate_position(n);
	let images = get_random_images(n / 2);
	let final_images = generate_position(n);
	let random;
	for (let i = 0; i < images.length; i++) {
		[random, positions] = get_random_position(positions);
		final_images[random] = images[i];
		[random, positions] = get_random_position(positions);
		final_images[random] = images[i];
	}
	return final_images;
}

export default get_images;
