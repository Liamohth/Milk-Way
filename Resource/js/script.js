$(document).ready(function(){

$('.js--first-section').waypoint(function(direction){
  if(direction === 'down'){
    $('nav').addClass('sticky-nav');
  }else{
    $('nav').removeClass('sticky-nav');
  }
},{
  offset:'25%'
});

//Mobile Nav
$('.js--mobile-nav-icon').click(function(){
  var nav = $('.js--main-nav');
  var icon = $('.js--mobile-nav-icon i');

  nav.slideToggle(200);
if(icon.hasClass('fa-align-justify')){
  icon.addClass('fa-times')
  icon.removeClass('fa-align-justify')
}else{
  icon.addClass('fa-align-justify')
  icon.removeClass('fa-times')
}
});

//btn scroll
$('.js-learn-more').click(function(){
  $('html, body').animate({scrollTop:$('.js--first-section').offset().top}, 1000);
});

$('.js--donate').click(function(){
  $('html, body').animate({scrollTop: $('.js--about-section').offset().top},1000);
});


//animation
$('.js--wp-4').waypoint(function(direction){
  $('.js--wp-4').addClass('animate__pulse');
},{
  offset:'50%'
});    


$('.js--wp-2').waypoint(function(direction){
  $('.js--wp-2').addClass('animate fadeIn');
},{
  offset:'50%'
});

//smooth scroll
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

$('#div-1').mouseover(function(){
  $('.js--footer-section').css('background-color', '#2a2a2a');
});

$('#div-1').mouseout(function(){
  $('.js--footer-section').css('background-color', '#121111');
});

$('#div-2').mouseover(function(){
  $('.js--footer-section').css('background-color', '#3b3b3b');
});

$('#div-2').mouseout(function(){
  $('.js--footer-section').css('background-color', '#121111');
});

$('#div-3').mouseover(function(){
  $('.js--footer-section').css('background-color', '#5d5d5d');
});

$('#div-3').mouseout(function(){
  $('.js--footer-section').css('background-color', '#121111');
});

$('#div-4').mouseover(function(){
  $('.js--footer-section').css('background-color', '#6e6e6e');
});

$('#div-4').mouseout(function(){
  $('.js--footer-section').css('background-color', '#121111');
});


});

// background-color: #2a2a2a;
// }
// #div-2{background-color: #3b3b3b; }
// #div-3{background-color: #4c4c4c; }
// #div-4{background-color: #5d5d5d; }
// #div-5{background-color: #6e6e6e; }