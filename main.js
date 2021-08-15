const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");

const options = {
	threshold: 0.6,
};

const navCheck = (entries) => {
	entries.forEach((entry) => {
		const className = entry.target.className;
		const activeLink = document.querySelector(`[data-page=${className}]`);
		const linkBoxDimensions = activeLink.getBoundingClientRect();
		if (entry.isIntersecting) {
			bubble.style.height = `${linkBoxDimensions.height}px`;
			bubble.style.width = `${linkBoxDimensions.width}px`;
			bubble.style.top = `${linkBoxDimensions.top}px`;
			bubble.style.left = `${linkBoxDimensions.left}px`;
		}
	});
};

const observer = new IntersectionObserver(navCheck, options);

sections.forEach((section) => {
	observer.observe(section);
});

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

navSlide();
