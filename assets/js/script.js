$(function(){
	'use-strict';

	AOS.init({
	 	once: true,
	 	duration: 1500,
	});
	
});

$(document).ready(function() {
    var owl = $('.product');
    owl.owlCarousel({
    margin: 10,
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        700:{
          item: 3
        },
        1000: {
          items: 4
        }
    }
    })
});

$('.nav-item a, .navbar a').on( 'click', function(e){
  var href = $(this).attr( 'href' );
  $( 'html, body' ).animate({
		scrollTop: $( href ).offset().top -300
  }, 1250, );
  e.preventDefault();

});

//   'use strict';
//   window.addEventListener('load', function() {
//     var forms = document.getElementsByClassName('needs-validation');
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// // })();