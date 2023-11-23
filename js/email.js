// import 'dotenv/config';
// import dotenv from 'dotenv';

// const {env} = require("../dist/email.021e7048");


// const dotenv = require();//2
// require("dotenv").config()//A
require("dotenv").config({path:'../.env'})
// dotenv.config({path:'../.env'});//2




// require('dotenv').config({path:'./.env'});
// const env = require('dotenv');
// env.config({path:'./.env'});


const KEYgen = process.env.KEY;
const genTo = process.env.TO;
const genFrom = process.env.FROM;
// alert(process.env.KEY);
console.log(KEYgen)
// alert(process.env.TO);
console.log(genTo)
// alert(process.env.FROM);
console.log(genFrom)



let forms = document.getElementById('successDiv');
// document.addEventListener('DOMContentLoaded', sendEmail);

function sendEmail() {
    alert("i was called" +
      "")
  let subjectText = (document.getElementsByClassName('Option').item(document.getElementById('subject').value)).innerHTML;
  forms.querySelector('.loading').classList.add('d-block');
    console.log(process.env.KEY) // remove this after you've confirmed it is working

  Email.send({
//        Host : "smtp.elasticemail.com",
  SecureToken: KEYgen,//20
  To: genTo,
  From: genFrom,
  Subject: subjectText.toString(),
  Body:
  "From: " + document.getElementById('email').value + "<br>" +
  "Phone: " + document.getElementById('phone').value + "<br><br>" +
  "Subject: " + subjectText + "<br><br>" +
  "Message:<br> " + document.getElementById('message').value + "<br><br>" +
  "Regards:<br> " + document.getElementById('name').value
}).then(
  message => {
  if (message === 'OK') {
  alert(message);

  forms.querySelector('.loading').classList.remove('d-block');
  forms.querySelector('.sent-message').classList.add('d-block');

  alert('Email sent successfully');
  document.getElementById('name').value = ''; // Clear form fields
  document.getElementById('email').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('message').value = '';
  document.getElementById('subject').value = 0;
  setTimeout(function () {
  forms.querySelector('.sent-message').classList.remove('d-block');
}, 10000);


} else {
  alert('Error: ' + message);
  forms.querySelector('.loading').classList.remove('d-block');
  forms.querySelector('.error-message').innerHTML = "Error: " + message;
  forms.querySelector('.error-message').classList.add('d-block');
}
}
  )
}
