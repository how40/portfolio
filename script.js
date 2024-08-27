
//Random background image
const images = [
    'url("/bg/IMG_0367.JPG")',
    'url("/bg/IMG_0385.JPG")',
    'url("/bg/IMG_0404.JPG")',
    'url("/bg/IMG_0480.JPG")',
    'url("/bg/IMG_0542.JPG")',
    'url("/bg/IMG_0548.JPG")',
    'url("/bg/IMG_0616.JPG")',
    'url("/bg/IMG_5125.JPG")',
    'url("/bg/IMG_5507.JPG")',
    'url("/bg/IMG_5534.JPG")',
    'url("/bg/IMG_5636.JPG")',
    'url("/bg/IMG_5711.JPG")',
    'url("/bg/IMG_5781.JPG")',
    'url("/bg/IMG_5914.JPG")',
    'url("/bg/IMG_6083.JPG")',
    'url("/bg/IMG_6173.JPG")',
    'url("/bg/IMG_6188.JPG")',
    'url("/bg/IMG_6267.JPG")',
    'url("/bg/IMG_6291.JPG")',
    'url("/bg/IMG_6385.JPG")',
    'url("/bg/IMG_6382.JPG")',
    'url("/bg/IMG_6443.JPG")',
    'url("/bg/IMG_6445.JPG")',
    'url("/bg/IMG_6456.JPG")',
    'url("/bg/IMG_0750.JPG")',
    'url("/bg/IMG_6495.JPG")',
    'url("/bg/IMG_0219.JPG")',
    'url("/bg/IMG_0234.JPG")',
    'url("/bg/IMG_0299.JPG")',
    'url("/bg/IMG_0322.JPG")'
];

randomBackground = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const bg = document.querySelector('body');
    bg.setAttribute("style","background-repeat:repeat;background-size:400px")
    bg.style.backgroundImage = images[randomIndex];
}

let randomColor = () => {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r},${g},${b})`;

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


//smooth scrolling nav
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const middleRight = document.getElementById('middle-right');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start', // Adjust this to 'center' or 'end' if needed
                });
            }
        });
    });
});



window.onload = randomColor;
