const images = ["Assets/Tennis1.JPEG", "Assets/Badminton1.JPEG"]; // Array of image URLs
let currentIndex = 0; // Start with the first image

const bgElement = document.querySelector(".bgimg-1"); // Get the div

function toggleBackgroundImage() {
  // Update the background image
  bgElement.style.backgroundImage = `url("${images[currentIndex]}")`;

  // Toggle the index between 0 and 1
  currentIndex = (currentIndex + 1) % images.length;
}

// Initialize the first image
toggleBackgroundImage();

// Change the image every 4 seconds
setInterval(toggleBackgroundImage, 4000);
