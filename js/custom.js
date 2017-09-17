$(document).ready(function()
{
	$('.fa-stack').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});
	$(window).scroll(function ()
	{
		if ($(window).scrollTop() > 45)
		{
	  		$('nav').addClass('navbar-animation-onscroll');
		}
		if ($(window).scrollTop() < 45)
		{
	  		$('nav').removeClass('navbar-animation-onscroll');
		}
	});
	$('.sidemenu').click(function(event)
	{
		event.stopPropagation();
		if ($(this).hasClass('clicked'))
		{
			$(this).removeClass('clicked');
			$('.desktop-visible').removeClass('sidenav-visible');
		}
		else
		{
			$(this).addClass('clicked');
			$('.desktop-visible').addClass('sidenav-visible');
		}
	});
	/*$('body').click(function()
	{
			$('.sidemenu').removeClass('clicked');
			$('.desktop-visible').removeClass('sidenav-visible');
	});*/
});