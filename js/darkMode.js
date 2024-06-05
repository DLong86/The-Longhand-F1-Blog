const sunIcon = document.querySelector(".fa-sun");
const container = document.querySelector(".container");
const body = document.getElementsByTagName("body")[0];
const links = document.getElementsByTagName("a");
const nav = document.querySelector(".nav");
const cards = document.querySelectorAll(".card");

function lightMode() {
	container.style.backgroundColor = "#f5f5f5";
	body.style.backgroundColor = "#f5f5f5";
	container.style.color = "#000";
	nav.style.color = "#000";
	cards.forEach((card) => {
		card.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";

		card.addEventListener("mouseenter", handleCardHover);
		card.addEventListener("mouseleave", handleCardUnhover);
	});

	changeLinkColor("#000");
}

function handleCardHover(event) {
	event.target.style.color = "#fff";
}

function handleCardUnhover(event) {
	event.target.style.color = "";
}

function changeLinkColor(color) {
	Array.from(links).forEach((link) => (link.style.color = color));
}

sunIcon.addEventListener("click", lightMode);
