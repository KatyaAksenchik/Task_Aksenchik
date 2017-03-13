
$(document).ready(function () {

    $("#slider").owlCarousel({
        
      autoPlay: 7500,
      singleItem:true,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsMobile : [479,1],
      autoPlay: true
 	});

    var $page = $('html, body');
$('a[href*="#"]').click(function() {
   $page.animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   });
   return false;
});    
    $("#nav-btn").click(function(){
        $(".nav-bar").slideToggle();
    });  

});

