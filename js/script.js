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





// for error > 400 e.g error 404 page not found
if (iStatusCode >= 400)
{
  if (strErrorBody.Length < 512) strErrorBody = strErrorBody.PadRight(512, ' ');
}


