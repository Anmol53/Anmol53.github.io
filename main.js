const navSlide = () => {
	let toggle = 1;
	const ham = document.querySelector(".ham");
	const nav = document.querySelector("nav");
	const links = document.querySelectorAll(".nav-links li");
	ham.addEventListener("click", () => {
		const keyframe = toggle === 1 ? "fade" : "unfade";
		nav.classList.toggle("nav-active");
		links.forEach((link, idx) => {
			link.style.animation = "";
			link.style.animation = `${keyframe} 1.2s ease-in-out forwards ${
				(-1 * idx) / links.length + 0.7
			}s`;
		});
		ham.classList.toggle("trigger");
		toggle *= -1;
	});
};

const highlightActiveNavLink = () => {
	const sections = document.querySelectorAll("section");
	const links = document.querySelectorAll(".nav-links li");
	window.addEventListener("scroll", () => {
		let currentSection = "";
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			if (pageYOffset >= sectionTop - sectionHeight / 3) {
				currentSection = section.getAttribute("id");
			}
		});

		links.forEach((link) => {
			link.classList.remove("active");
			if (link.classList.contains(currentSection)) {
				link.classList.add("active");
			}
		});
	});
};

navSlide();
highlightActiveNavLink();
