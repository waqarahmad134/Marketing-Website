function sendEmail() {


  var parms = {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('email').value,
    message: document.getElementById('message').value
  }

  alert(parms.from_name + "\n" + parms.email_id + "\n" + parms.message + "\n");

  emailjs.send('service_wj5rgb4', 'template_e2femcd', parms, "Qv4mKCFdSIerSSlg0").then(function (res) {
    alert("ww")
    alert("Success: " + res.status);

  })
}

// document.getElementById('contact-form').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent the default form submission behavior
//
//   emailjs.send('service_wj5rgb4', 'template_e2femcd', parms)
//     .then(function (res) {
//       console.log("Success: " + res.status);
//       alert("Email sent successfully!");
//     })
//     .catch(function (error) {
//       console.log('Error: ', error);
//       alert("Email could not be sent. Please try again later.");
//     });
//
//   // Optionally, you can clear the form fields after submission
//   this.reset(); // Resets the form fields
// });

  // document.getElementById('contact-form').addEventListener('submit', function (event) {
  //   event.preventDefault();
  //   // generate a five digit number for the contact_number variable
  //   this.contact_number.value = Math.random() * 100000 | 0;
  //   // these IDs from the previous steps
  //   emailjs.sendForm('service_wj5rgb4', 'template_e2femcd', this)
  //     .then(function () {
  //       console.log('SUCCESS!');
  //       alert("success")
  //     }, function (error) {
  //       console.log('FAILED...', error);
  //       alert(error)
  //     });
  // });





