const menu = document.querySelector(".menu");
const navigation = document.querySelector(".nav");
const menuIcon = document.querySelector(".fa-bars");

function handleNav() {
	if (menuIcon.classList.contains("fa-bars")) {
		menuIcon.classList.remove("fa-bars");
		menuIcon.classList.add("fa-xmark");
		navigation.style.transform = "translateY(0)";
	} else {
		menuIcon.classList.remove("fa-xmark");
		menuIcon.classList.add("fa-bars");
		navigation.style.transform = "translateY(-100%)";
	}
}

menu.addEventListener("click", handleNav);

// sunIcon.classList.contains("fa-sun")
