const generateHexBtn = document.querySelector(".generate-btn");
const colorDisplay = document.querySelector(".color-display");
const hexValue = document.querySelector(".hex-value");
const copyBtn = document.querySelector(".copy-btn");

function generateRandomHex() {
  // Generate random hex color code
  const randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  // Update the display and text
  colorDisplay.style.backgroundColor = randomColor;
  hexValue.textContent = randomColor.toUpperCase();
}

// Generate color when button is clicked
generateHexBtn.addEventListener("click", generateRandomHex);

// Copy hex value to clipboard
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexValue.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy to Clipboard"), 1000);
});

// Generate initial color when page loads
generateRandomHex();
