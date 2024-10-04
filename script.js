// Get the button element by its ID
const button = document.getElementById('colorSwitcher');

// Define an array of colors to switch between
const colors = ['#c92d3a', '#eeeeee', '#00469e', '#000000'];

// Keep track of the current color index
let currentColorIndex = 0;

// Add an event listener to the button
button.addEventListener('click', function() {
    // Change the background color of the body
    document.body.style.backgroundColor = colors[currentColorIndex];
    document.body.style.color = colors[(currentColorIndex + 1) % colors.length];
    // Increment the color index, loop back to the start if at the end
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});
