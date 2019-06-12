$(function() {
      var header = $(".header");
	var menuBtn = $(".menuBtn__span");
	var logoLink = $(".logo__link");
	var logoImg = $(".logo__link-img");

      var TargetPos = 64;
	
      $(window).scroll( function() {
         var ScrollPos = $(window).scrollTop();
         if( ScrollPos > TargetPos ) {
			 header.addClass('header-change');
			 //menuBtn.addClass('menu__button-black');
			 logoLink.css({'color':'#212121'});
			 logoImg.removeClass('logo__link-img-w');
			 logoImg.addClass('logo__link-img-b');
			 menuBtn.css({'background-color':'#212121'});
         }
         else {
			 header.removeClass('header-change');
			 logoLink.css({'color':'white'});
			 logoImg.removeClass('logo__link-img-b');
			 logoImg.addClass('logo__link-img-w');
			 menuBtn.css({'background-color':'white'});
         }
      });
   });
