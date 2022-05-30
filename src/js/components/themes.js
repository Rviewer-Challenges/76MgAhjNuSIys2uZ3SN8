document.getElementById('btn-theme').addEventListener('click', function () {
	document.body.classList.toggle('theme--dark');
	document.getElementById('theme-icon').classList.toggle('fa-sun');
	document.getElementById('theme-icon').classList.toggle('fa-moon');
});
