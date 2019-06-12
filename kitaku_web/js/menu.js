var menu   = $(".header__menu");
//var header = $(".header");
var open = false;

$(function() {
  $('.menu__button').on('click', function() {
	  if(open === false)
		  {
			  open = true;
			$(this).toggleClass('active');
		  	//menu.addClass('show');
			  menu.fadeToggle(500);
			  //header.css({'background-color':'#ffcf64'});
		  }
	  else
		  {
			  open = false;
			  $(this).removeClass('active');
			  menu.fadeToggle(500);
		  	//menu.removeClass('show');
			 // menu.fadeOut(1000);
			  //header.css({'background-color':'#fff'});
		  }

  });
});

