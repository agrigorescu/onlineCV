$(function(){
    console.log("the dom is ready");

    //collapsing the navbar when in mobile mode
    $(".button-collapse").sideNav({

    });

    //including the parallax scrolling effect
    $('.parallax').parallax();

    //smooth scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });

      //using typed.js - typing the word hello in the about section
      for(let i=0; i<100; i++){
        $(".element").typed({
          strings: ["Hello!"],
          typeSpeed: 50
        });
      }

      //initializing the carousel
      $('.carousel').carousel();
     

     //making the form conversational
     $("form").conversationalForm();


});
