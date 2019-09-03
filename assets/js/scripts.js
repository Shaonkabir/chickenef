
// document.ready function
$(document).ready(function() {
	
	// Humburger menu script
	$('.first-button').on('click', () => {
	    $('.animated-icon1').toggleClass('open');
	 });  
	
	// Initialize material-scrolltop
	// $('body').materialScrollTop();



	// Full width Video Section
	$('.playBtn').on('click', e => {
		e.preventDefault();
		console.log('Play Button is clicked')
	})



});

// Media Query for Humburger Menu
$(window).resize(function() {
  // This will execute whenever the window is resized
  let height =  $(window).height(); // New height
  let width =  $(window).width(); // New width

  // appearing and disppearing humburger menu and default menu according to window width 
  // @media (min-width: 768px) { ... }
  if(width <= 768) {
  	$('.first-button').css("display", "block")
  	$('.default-menu').css("display", "none")  	
  }

});


// window.scroll function 
$(window).scroll(function() {
  var scroll = $(window).scrollTop();

	// Hero Area Parallax
	$(".parallax-zoom-blur img").css({
		width: (100 + scroll/5)  + "%",
		top: -(scroll/10)  + "%",
		"-webkit-filter": "blur(" + (scroll/100) + "px)",
		filter: "blur(" + (scroll/100) + "px)"
	});

	// Color changeing script for header on scrolling

	// TODO: Smooth Transition should be added .

    if (scroll > 460) {
        $(".header-area").css("background" , "#000");
        $(".header-area a").css("color" , "#fff");

  		// Changing logo if user scroll 460px
        // $("img#logoImage").attr("src","assets/img/logo-3.png");
    } else{
        $(".header-area").css("background" , "transparent"); 
        $(".header-area a").css("color" , "#fff");

  		// Changing logo if scroll size is less than 460px
        // $("img#logoImage").attr("src","assets/img/logo-3.png"); 	
    }
});





