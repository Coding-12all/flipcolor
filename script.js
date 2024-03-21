const colorBox = document.getElementById('colorBox');
const flipButton = document.getElementById('flipButton');

// Array of colors
const colors = [
  '#ff0000', // Red
  '#00ff00', // Green
  '#0000ff', // Blue
  '#ffff00', // Yellow
  '#ff00ff', // Magenta
  '#00ffff', // Cyan
];

// Function to generate a random color
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to set the background color of the color box
function setColor() {
  const color = getRandomColor();
  colorBox.style.backgroundColor = color;
}

// Event listener for button click
flipButton.addEventListener('click', setColor);

// Initial color when the page loads
setColor();
