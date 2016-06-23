
// Enable Scrolling to sections

// $('.scroll-link').on('click', function(e) {
// 	e.preventDefault(); 
// 	alert("df"); 
	
// 	var href = $(this).attr('href'); 
// 	$('html, body').animate({ scrollTop: $(href).offset().top },'slow'); 
// });


// $('a').click(function(){

//     $('html, body').animate({
//         scrollTop: $(  $(this).attr('href') ).offset().top
//     }, 500);


//     console.log("erw");
//    //return false;
// });

function setVision() {
	$('#vision').show();
	var nav = $('#navboxes');
	nav.css("margin-top", "100vh");
	nav.css("position", "relative");
	$('#stipendium').css("margin-top", "0");
}


function setNavboxes() {
	var nav = $('#navboxes');
	nav.css("position", "fixed");
	nav.css("margin-top", "0px");
	nav.css("width", "100%");
	var height = nav.outerHeight();
	$('#stipendium').css("margin-top", height+"px");
}



function setParallax() {
	$('#parallax').css("display","block");
}
function hideParallax() {
	$('#parallax').css("display","none");
}





$( document ).ready(function() {
  //alert("ready");
	 $('.scroll-link').on('click', function(e) {
		e.preventDefault(); 
		var href = $(this).attr('href'); 
		//console.log($(href).offset().top);
		$('html,body').animate({ scrollTop: $(href).offset().top },'800'); 
		window.location.hash = (href);

	});

	$('.scroll-link-offset').on('click', function(e) {
		e.preventDefault(); 
		var href = $(this).attr('href'); 
		//console.log($(href).offset().top);
		var offset = $(href).offset().top - $("#vision").outerHeight();
		$('html,body').animate({ scrollTop: offset },'800'); 
		window.location.hash = (href);

	});


	
    $window = $(window);
    var topEfa = $('#efa').offset().top;
    var scrolled = false;

   
	$window.scroll(function() {

	    if ( ($window.scrollTop() >= $('#navboxes').offset().top) && (!scrolled)) {


	    
	 		window.scrollTo(0, 0);
    		//$window.unbind('scroll');
	 		scrolled = true;
			setNavboxes();
	    }
	    if ( ($window.scrollTop() < topEfa)) { 
	    	hideParallax();
	    }
	    if ( ($window.scrollTop() >= topEfa) ) { 
	    	setParallax();
	    }
	});


	$('#vision-link').on('click', function(e) {
		e.preventDefault(); 
		var href = "#vision";
		scrolled = false;
		setVision();
		$('html,body').animate({ scrollTop: $(href).offset().top },'800'); 
		window.location.hash = (href);

	});







});

