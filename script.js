const revealer = document.querySelector("#reveal");
const links = document.querySelector("#contact-list");

revealer.addEventListener("onclick", () => {
    links.style.display = "none";
})