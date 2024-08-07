// Select the button and the div
const btn = document.querySelector("button");
const colorBox = document.querySelector("#colorBox");

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for button click
btn.addEventListener("click", function () {
    let h3  = document.querySelector("h3");
    let randomcolor = getRandomColor();
    h3.innerText =randomcolor;

    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
    colorBox.textContent = `This is your new color: ${newColor}`;
});

