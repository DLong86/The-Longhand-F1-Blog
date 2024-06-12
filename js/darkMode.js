const sunIcon = document.querySelector(".fa-sun");
const container = document.querySelector(".container");
const body = document.getElementsByTagName("body")[0];
const links = document.getElementsByTagName("a");
const nav = document.querySelector(".nav");
const cards = document.querySelectorAll(".card");
// about page
const imageCard = document.querySelectorAll(".image-card");
const first = document.querySelector(".first");

function lightMode() {
	if (sunIcon.classList.contains("fa-sun")) {
		sunIcon.classList.add("fa-moon");
		sunIcon.classList.remove("fa-sun");
		container.style.backgroundColor = "#f5f5f5";
		body.style.backgroundColor = "#f5f5f5";
		container.style.color = "#000";
		nav.style.color = "#000";
		imageCard.forEach((image) => {
			image.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
			image.style.height = "200px";
			image.style.borderRadius = "10px";
			image.style.padding = " 20px";
		});
		first.style.border = "none";
		cards.forEach((card) => {
			card.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";

			card.addEventListener("mouseenter", handleCardHover);
			card.addEventListener("mouseleave", handleCardUnhover);
		});

		changeLinkColor("#000");
	} else {
		sunIcon.classList.add("fa-sun");
		sunIcon.classList.remove("fa-moon");
		container.style.backgroundColor = "#100c08";
		body.style.backgroundColor = "#100c08";
		container.style.color = "#fff";
		nav.style.color = "#fff";
		first.style.border = "";
		imageCard.forEach((image) => {
			image.style.boxShadow = "";
			image.style.height = "";
			image.style.borderRadius = "";
			image.style.padding = "";
		});
		cards.forEach((card) => {
			card.removeEventListener("mouseenter", handleCardHover);
			card.removeEventListener("mouseleave", handleCardUnhover);
		});

		changeLinkColor("#fff");
	}
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
