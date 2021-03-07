
// my js

const form= document.getElementById('form') ;
const email= document.getElementById('email') ;
const  passwort= document.getElementById('passwort') ;
const  errorElement= document.getElementById('error')
form.addEventListener('submit', (e)=> {
  let message = []
  e.preventDefault();

  checkInputs();

  if (passwort.value.length <=6){
    message.push('passwort muss länger als 6 buchtabel sein')
  

    if(message.length>0){
      e.preventDefault();
      errorElement.innerText= message.join(',');


    }
  }
});

function checkInputs(){
  // get de value from the inputs
  const emailValue= email.value.trim();
  const passwortValue= passwort.value.trim();

  if (emailValue=== ''){
    // add error
    setErrorfor(email, 'Die Email musss nicht leer sein ');

  }else if(!isEmail(emailValue)){
    // add success
    setErrorfor(email, 'Email ist nicht gültig');
  }else {
    setSuccessfor(email) ;

  }

  /*if(passwortValue===''){
    setErrorfor(passwort, 'Das passwort musss nicht leer sein ');

  }else if(passwortValue<5){
    // add success
    setErrorfor(passwort, 'Das passwort musss mindestens 5 buchtabell haben');
  }else {
    setSuccessfor(passwort) ;

  }

  }*/
}

function setErrorfor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';

}

function setSuccessfor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict


