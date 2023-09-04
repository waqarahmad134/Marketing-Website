window.onload = function () {
  var loadingPage = document.querySelector('.loading-page');
  loadingPage.style.opacity = 0; // Set opacity to fade out
  setTimeout(function () {
    loadingPage.style.display = 'none'; // Hide the loading screen after fading

    // Once the loading screen is hidden, start the text rotation
    var $textChangeAreas = $(".text-change-area-h3");
    var n = 0;
    var t = setInterval(function () {
      $textChangeAreas.addClass("DisplayNone"); // Hide all headings
      $textChangeAreas.eq(n).removeClass("DisplayNone"); // Display the current heading
      n++;
      n === $textChangeAreas.length && (n = 0);
    }, 220);

    // Clear the interval when needed (e.g., on unload or when stopping the animation)
    // clearInterval(t);
  }, 1000); // Adjust the delay based on your preference
};





