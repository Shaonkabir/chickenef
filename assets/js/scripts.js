
// document.ready function
$(document).ready(function() {
	
	// Humburger menu script
	$('.first-button').on('click', () => {
	    $('.animated-icon1').toggleClass('open');
	 });  
	
	// Initialize material-scrolltop
	// $('body').materialScrollTop();



	// Full width Video Section
	// $('.playBtn').on('click', e => {
	// 	e.preventDefault();
	// 	this.paused ? this.play() : this.pause();
	// 	console.log('Play Button is clicked')
	// })

	

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





// Selecting Elements
const nameFieldOne = document.querySelector('.nameFieldOne')
const nameFieldTwo = document.querySelector('.nameFieldTwo')
const emailField = document.querySelector('.emailField')
const phoneField = document.querySelector('.phoneField')
const textarea = document.querySelector('.textarea')
const output = document.querySelector('.output')
const button = document.querySelector('.button')

// Name Validation Function
const nameValidation = () => {
    if(nameFieldOne.value == '' || nameFieldOne.value == null) {
        output.classList.add('err')
        output.innerHTML =  `Write your First Name`;
        return false;
    } else if(nameFieldOne.value.length <3 ) {
        output.innerHTML = `Name should be atleast 3 Charcter`;
        output.classList.add('err');
        return false;
    } else if(nameFieldTwo.value == '' || nameFieldTwo.value == null) {
        output.classList.add('err')
        output.innerHTML =  `Write your Last Name`;
        return false;
    } else if(nameFieldTwo.value.length <3 ) {
        output.innerHTML = `Name should be atleast 3 Charcter`;
        output.classList.add('err');
        return false;
    } else {
        output.classList.remove('err')
        output.innerHTML = '';
        return true;
    }
}
// Email Validation Function
const emailValidation = () => {
    const emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    if(emailField.value == '' || emailField.value == null) {
        output.innerHTML = `Enter Your Email`;
        output.classList.add('err')
        return false;
    } else if(emailRegExp.test(emailField.value)) {
        output.innerHTML = ''
        return true;
    } else {
        output.classList.add('err');
        output.innerHTML = `Invailed Email Address.`;
        return false;
    }
}
// Phone Number Validation Function
 const phoneValidation = () => {
    const phoneRegExp = /^[01]+[3-9]\d{8}$/ ;

    if(phoneRegExp.test(phoneField.value)) {
        output.innerHTML = '';
        return true;
    } else {
        output.classList.add('err');
        output.innerHTML = `Invailed Phone Number`;
        return false;
    }
}


// Textarea vaildation 
const textareaValidation = () => {
	if(textarea.value == "" || textarea.value == null) {
        output.classList.add('err')
        output.innerHTML = `Please Write your message`;
        return false;
	} else {
        output.classList.remove('err')
        output.innerHTML = '';
        return true;
	}
}


// Contact form validation
function regiseterValidate(e) {
	e.preventDefault();
    if(nameValidation() && emailValidation() && phoneValidation() && textareaValidation() ) {
        output.innerHTML = `Your message send successfull. Thanks for being with us`;
		output.classList.remove('err');
		output.style.background =  "#2a8d2a";
		output.style.color =  "#fff";
		output.style.display =  "inline-block";
		output.style.padding =  "10px 26px";

        nameFieldOne.value = '';
        nameFieldTwo.value = '';
        emailField.value = '';
        phoneField.value = '';
        textarea.value = '';

        return true;
    }
}

button.addEventListener('click',regiseterValidate);



// Video Play Section
const video = document.querySelector('.video')
const playBtn = document.querySelector('.playBtn')

const icon = document.querySelector('.playIcon');

playBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if(video.paused) {
		video.play();
		this.innerHTML = ""
		icon.innerHTML = `<i class="fas fa-play"></i>`
	} else {
		video.pause();
		icon.innerHTML = `<i class="fas fa-pause"></i>`
		this.innerHTML = ""
	}

})


// Animate on Scroll
   AOS.init();