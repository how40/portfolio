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
