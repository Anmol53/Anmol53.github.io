const colorBadge = () => {
  const badges = document.querySelectorAll("li.badge");
  badges.forEach((badge) => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    while (randomColor.length < 6) {
      randomColor = 0 + randomColor;
    }
    badge.style.backgroundColor = `#${randomColor}30`;
    badge.style.borderColor = `#${randomColor}`;
    badge.style.color = `#${randomColor}`;
  });
};

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

colorBadge();
navSlide();
