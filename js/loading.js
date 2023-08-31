window.onload = function () {
  var loadingPage = document.querySelector('.loading-page');
  loadingPage.style.opacity = 0; // Set opacity to fade out
  setTimeout(function () {
    loadingPage.style.display = 'none'; // Hide the loading screen after fading
  }, 1000); // Adjust the delay based on your preference
};
