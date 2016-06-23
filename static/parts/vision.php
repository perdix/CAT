<section id="vision">
	

<div id="background">
	
</div>

<div id="typed-strings">
		<p id="p1">
		
	In Zusammenarbeit mit dem europäischen Forum Alpbach verleiht der Club Alpbach Tirol 
	jungen Talenten eine Stimme und vernetzt sie über Tirol mit Europa. 
<br>
<br>
	^500 Abseits klassischer Hierarchien ermöglichen wir einen interdisziplinären
	 Austausch und Freundschaft zwischen renommierten Experten und motivierten Stipendiaten. 
<br>
<br>

	^500 Wir arbeiten gemeinsam mit Tiroler Partnern als Vorreiter an innovativen Ideen für ein gemeinsames Europa.

	<br>
	<br>



</p>


</div>


<div id="result">
	<span id="typed"></span>
	<ul id="short-nav">
		
		<li><a href="#club" class="scroll-link-offset">Der Club</a></li>
		<li><a href="#stipendium" class="scroll-link-offset">Das Stipendium</a></li>
		<li><a href="#partner" class="scroll-link-offset">Unserer Förderer</a></li>
		<li><a href="https://www.facebook.com/clubalpbachtirol/">News@Facebook</a></li>
	</ul>
</div>




</section>









<script>
		// Set visited Cookie
 	var cookieName = "visited";
    var visited = getCookie(cookieName);
    
    if (!visited) {
    	document.getElementById('vision').style.display="block";
    }
    


  $(function(){

	 //  	$('#short-nav li a').on('click', function(e) {
			
	 //        $('#vision').hide();

		// });



        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            showCursor: false,
            startDelay: 0,
            callback: function() {
            	$('#short-nav').fadeIn(1000);
     //        	setTimeout(function() {
     //        	    $('html,body').animate({ scrollTop: $("#navboxes").offset().top },'3000'); 
					// window.location.hash = "#navboxes";
					// $('#vision').hide();
     //        	}, 3000);

            }
        });

    });
</script>