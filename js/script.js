document.addEventListener('DOMContentLoaded', menuBar);

function menuBar() {

  var unset_html = document.querySelector("html");
  var unset_body = document.querySelector("body");



  var menubar = document.querySelector('#menu-bar');
  var mynav = document.querySelector('nav');


  menubar.onclick = () => {

    unset_html.style.overflow = "unset";
    unset_body.style.overflow = "unset";

    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
  }

  // const navbar = document.querySelector('.header')

  window.onscroll = () => {

    if (window.scrollY > 0) {

      menubar.classList.remove('fa-times');
      mynav.classList.remove('active');

    }
  }

}

// window.onload = () =>{
//   var $textChangeAreas = $(".text-change-area-h3");
//   var t,
//     n = 0;
//
//     clearInterval(t);
//     t = setInterval(function () {
//       $textChangeAreas.addClass("DisplayNone"); // Hide all headings
//       $textChangeAreas.eq(n).removeClass("DisplayNone"); // Display the current heading
//       n++;
//       n === $textChangeAreas.length && (n = 0);
//     }, 220);
//
// }
//
//
















const imageText = document.querySelector('.image-transition');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  imageText.style.animation = 'none'; // Reset animation
  void imageText.offsetWidth; // Trigger reflow
  imageText.style.animation = null; // Reapply animation
  imageText.style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeImage, 3000); // Change image every 5 seconds

//for error > 400 e.g error 404 page not found
if (iStatusCode >= 400)
{
  if (strErrorBody.Length < 512) strErrorBody = strErrorBody.PadRight(512, ' ');
}


