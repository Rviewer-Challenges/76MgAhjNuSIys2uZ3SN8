const images = [
	'/assets/img/580b57fcd9996e24bc43c325.png',
	'/assets/img/585964ef4f6ae202fedf285d.png',
	'/assets/img/580b57fcd9996e24bc43c320.png',
	'/assets/img/580b57fcd9996e24bc43c32a.png',
	'/assets/img/580b57fcd9996e24bc43c322.png',
	'/assets/img/585965744f6ae202fedf286a.png',
	'/assets/img/5859662e4f6ae202fedf2878.png',
	'/assets/img/585965444f6ae202fedf2865.png',
	'/assets/img/585965f24f6ae202fedf2873.png',
	'/assets/img/5859661d4f6ae202fedf2877.png',
	'/assets/img/580b57fcd9996e24bc43c321.png',
	'/assets/img/580b57fcd9996e24bc43c32d.png',
	'/assets/img/5859611e4f6ae202fedf2859.png',
	'/assets/img/585965ad4f6ae202fedf286e.png',
	'/assets/img/5859659b4f6ae202fedf286d.png',
	'/assets/img/580b57fcd9996e24bc43c31c.png',
	'/assets/img/58595e144f6ae202fedf284f.png',
	'/assets/img/585964e74f6ae202fedf285c.png',
	'/assets/img/585965e14f6ae202fedf2872.png',
	'/assets/img/580b57fcd9996e24bc43c32b.png',
];

function generate_position(n){
    let positions = [];
    for (let i = 0; i < n; i++) {
        positions.push(i);
    }
    return positions;
}

function get_random_position(positions){
    let i = Math.floor(Math.random() * (positions.length));
    let random = positions[i];
    positions.splice(i, 1);
    return [random, positions];
}

function get_random_images(n){
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
    let images = get_random_images(n/2);
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
