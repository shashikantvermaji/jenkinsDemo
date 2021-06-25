$(function() 
{
    $('a[href*=#]').on('click', function(e) 
    {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});
function fadeIn()
        {
            document.querySelector(".title h1").style.opacity="1";
        }
        var marginY = 0;
        var destination = 0;
        var speed = 10;
        var scroller = null;

function initScroll(elementId)
        {
	       destination = document.getElementById(elementId).offsetTop;

	       scroller = setTimeout(function()
	       {
		         initScroll(elementId);
	       }, 0);

	        marginY = marginY + speed;
            speed += 0;

	       if(marginY >= destination)
	       {
		         clearTimeout(scroller);
	       }

        	window.scroll(0, marginY);
         //console.log(destination);
           }

            window.onscroll = function()
            {
	           marginY = this.pageYOffset;
            };
//btn code
            function toTop()
            {
	           scroller = setTimeout(function()
                {
		             toTop();
	            }, 0);

                marginY = marginY - speed;

	             if(marginY <= 0)
                {
		               clearTimeout(scroller);
	            }
	              window.scroll(0, marginY);
            }
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}