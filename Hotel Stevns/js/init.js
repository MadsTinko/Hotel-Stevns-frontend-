$(document).ready(function(){
  $('.slider').slider();
  $('.materialboxed').materialbox();
  $('.scrollspy').scrollSpy();
  $('.sidenav').sidenav();
  $('.parallax').parallax();

  var headerHeight = $('header').outerHeight();
  $('.slide-section').click(function(e){
    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);

    e.preventDefault();
  });
});