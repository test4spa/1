$(document).ready(function()
{
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
});