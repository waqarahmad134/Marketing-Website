const env = require('dotenv');
env.config({path:'./config.env'});
const KEYgen = process.env.KEY;
const genTo = process.env.To;
const genFrom = process.env.FROM;

function sendEmailRight() {

  // alert("in")
    Email.send({
//        Host : "smtp.elasticemail.com",
      SecureToken: KEYgen,//20
      To: genTo,
      From: genFrom,
      Subject: 'Contacts You',
      Body:
        "From: " + document.getElementById('emailRight').value + "<br>" +
        "Phone: " + document.getElementById('phoneRight').value + "<br><br>" +
        "Message:<br> " + document.getElementById('messageRight').value + "<br><br>" +
        "Regards:<br> " + document.getElementById('nameRight').value
    }).then(
      message => {
        if (message === 'OK') {
          // alert(message);


          // alert('Email sent successfully');
          document.getElementById('name').value = ''; // Clear form fields
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';


        } else {
          alert('Error: ' + message);
        }
      }
    )
    //58009271-2324-49eb-8129-174e02991665
    // Your security token is 58009271-2324-49eb-8129-174e02991665 Please take note of this.
//Your security token is 58009271-2324-49eb-8129-174e02991665 Please take note of this.
}












  document.addEventListener('DOMContentLoaded', emailBar);

  function emailBar() {


    var unset_html = document.querySelector("html");
    var unset_body = document.querySelector("body");


    var menubar = document.querySelector('.cta');
    var mynav = document.querySelector('.rightContact');
    var dispBack = document.querySelector('.backBlack');


    menubar.onclick = () => {

      // unset_html.style.overflow = "unset";
      // unset_body.style.overflow = "unset";


      dispBack.style.display = 'flex'
      // menubar.classList.toggle('fa-times');
      mynav.classList.add('active');

    }

    // const navbar = document.querySelector('.header')

    window.onscroll = () => {

      if (window.scrollY > 0) {

        // menubar.classList.remove('fa-times');
        mynav.classList.remove('active');
        dispBack.style.display = 'none'

        unset_html.style.overflow = "";
        unset_body.style.overflow = "";

      }
    }

    var crossExiting = document.querySelector('.crossExit');
    crossExiting.onclick = () =>{
      mynav.classList.remove('active');

      dispBack.style.display = 'none'
      unset_html.style.overflow = "";
      unset_body.style.overflow = "";
    }

  }


