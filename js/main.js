document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const navCollapse = document.querySelector('.navbar-collapse');
	const navLinks = document.querySelectorAll('.nav-link');
	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	navLinks.forEach((link) =>
		link.addEventListener('click', () => navCollapse.classList.remove('show'))
	);

	window.addEventListener('scroll', addShadow);
});
