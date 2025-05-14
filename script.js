// Get the elements
const toggleButton = document.getElementById('toggleButton');
const image = document.getElementById('animatedImage');
const statusText = document.getElementById('status');

// Check if user preferences are saved in localStorage
const isAnimationEnabled = localStorage.getItem('animationEnabled') === 'true';

// Apply the saved preference
if (isAnimationEnabled) {
  image.classList.add('animate');
  statusText.textContent = 'Animations are currently enabled.';
} else {
  statusText.textContent = 'Animations are currently disabled.';
}

// Toggle the animation when the button is clicked
toggleButton.addEventListener('click', () => {
  // Check if animation is enabled
  const isAnimationActive = image.classList.contains('animate');

  if (isAnimationActive) {
    // Disable animation
    image.classList.remove('animate');
    localStorage.setItem('animationEnabled', 'false');
    statusText.textContent = 'Animations are currently disabled.';
  } else {
    // Enable animation
    image.classList.add('animate');
    localStorage.setItem('animationEnabled', 'true');
    statusText.textContent = 'Animations are currently enabled.';
  }
});
