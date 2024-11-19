//Colors

let randomColor = () => {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r},${g},${b})`; //random color

    const bg = document.querySelector('body');
    bg.setAttribute("style","background-color:black;")
    bg.style.backgroundColor = rgb;
    document.documentElement.style.setProperty('--dark-color', rgb);

    const lightColor = getContrastColor(r, g, b);
    document.documentElement.style.setProperty('--light-color', lightColor);
}


// Function to compute a contrasting color
function getContrastColor(r, g, b) {
// Simple algorithm to create a light color that's in contrast with the dark color
const avg = (r + g + b) / 3;
const newR = Math.min(255, avg + 100); // Ensure the color is light enough
const newG = Math.min(255, avg + 100);
const newB = Math.min(255, avg + 100);
return `rgb(${newR},${newG},${newB})`;
}


//scroll-based sidebar
document.addEventListener("DOMContentLoaded", () => {
    // Select all sections and nav links
    const sections = document.querySelectorAll("#middle-right .section");
    const navLinks = document.querySelectorAll("#menu .nav-link");

    const firstHeading = sections[0];
    const firstSectionId = firstHeading.closest(".section").getAttribute("id");
    const firstNavLink = document.querySelector(`.nav-link[href="#${firstSectionId}"]`);
  
    if (firstNavLink) {
      // Remove active class from all links, just in case
      navLinks.forEach((link) => link.classList.remove("active"));
  
      // Add active class to the first section's link
      firstNavLink.classList.add("active");
    }
  
    // Create an IntersectionObserver tied to the #middle-right container
    const observer = new IntersectionObserver(
      (entries) => {
        let mostRecentHeading = null;
        entries.forEach((entry) => {  
          if (entry.isIntersecting) {
            mostRecentHeading = entry.target;
          }
        });

        if (mostRecentHeading) {

            const id = mostRecentHeading.closest(".section").getAttribute("id");
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (navLink) {
                navLinks.forEach((link) => link.classList.remove("active"));
                navLink.classList.add("active");
            }
          }
      },
      {
        root: document.querySelector("#middle-right"),
        threshold: 0.5, 
      }
    );
  
    // Observe all sections
    sections.forEach((section) => observer.observe(section));
  });
  