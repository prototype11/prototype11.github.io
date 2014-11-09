var nav = $("#btnRightMenu");
var navi = $("#rightBtn");
var ellipse = $("#btnLeftMenu");
var menu = $(".menuScreen");
var btnCloseMenu = $("#btnClose");

var mobileNav = $("#btnLeftMenu-mobile");
var mobileMenu = $(".menuScreen-mobile");
var btnCloseMobileMenu = $("#btnClose-mobile");

var myClock = $(".myClock");

var left = $(".pageLeft");
var right = $(".pageRight");
var socialBar = $(".social-bar");
var form = $(".form");
var logo = $(".content-title");
var sLogo = $(".site-logo");
var infoRow = $(".info-row");
var clRow =$("#clock-row");
var clCol =$("#clock-col");
var info = $(".info-col");
var links = $(".link-col");
var page  = $(".pageRow");
var content = $(".inner-content-div");
var contentLow = $(".lower-content-div");
var rightContent = $(".right-content-row");
var sidebar = 0;
var fp = $("#fullpage");
var sections = $(".section-content");

/*******************Menu Button Clicks********************/
ellipse.click(function(){
	menu.fadeIn();
});

btnCloseMenu.click(function(){
	menu.fadeOut();
});

menu.find('a').click(function(){
	menu.fadeOut();
});
/*********************************************************/

/************Mobile Menu Button Clicks********************/
mobileNav.click(function(){
	mobileMenu.fadeIn();
});

btnCloseMobileMenu.click(function(){
	mobileMenu.fadeOut();
});

mobileMenu.find('a').click(function(){
	mobileMenu.fadeOut();
});
/*********************************************************/

/*******************Side Bar Toggle***********************/
nav.click(function(){
	$(".cta-image").each(function(){
		if(!$(this).hasClass("hidden") && $("#section-1").hasClass("active")){
			$(this).removeClass("animated rotateIn");	
		}
	});
	navi.toggleClass("nav-btn-span");
	showHideSideBar();
});

$(document).on('click', function(event) {
	if(right.hasClass("t-col-r-2")){
  		if (!$(event.target).closest('.pageRight').length && !$(event.target).closest('.navicon').length && !$(event.target).closest('.down-arrow').length) {
  			showHideSideBar();
  		}
  	}
});

function showHideSideBar(){
	page.toggleClass("hide-flow");
	if(!myClock.hasClass("zoom")){
		myClock.addClass("zoom");
	} else {
		setTimeout(function(){
			myClock.removeClass("zoom");
		},1000);
	}
	sections.each(function(){
		$(this).toggleClass("center-content");
	});
	
	if(right.hasClass("t-col-r-2")){
		rightContent.addClass("animated bounceOutRight");
		setTimeout(function(){
			navi.addClass("nav-btn-shift-rev");
			right.addClass("t-col-r-2-rev");
			fp.addClass("t-col-l-2-rev");
		},500)
		setTimeout(function(){
			toggle_sidebar_delayed();
		},800);
	}else{
		rightContent.removeClass("animated bounceOutRight");
		navi.removeClass("nav-btn-shift-rev");
		right.removeClass("t-col-r-2-rev");
		fp.removeClass("t-col-l-2-rev");
		toggle_sidebar_delayed();
	}
	setTimeout(function(){
		$(window).trigger('resize');
	},300);
	
}

function stack_content_divs(){
	content.toggleClass("large-4");
	content.toggleClass("large-12");
	contentLow.toggleClass("large-6");
	contentLow.toggleClass("large-12");
}

function toggle_sidebar_delayed(){
	navi.toggleClass("nav-btn-shift");
	right.toggleClass("invisible");
	right.toggleClass("t-col-r-2");
	fp.toggleClass("t-col-l-2");
	logo.css("height","150px");
	

	clRow.toggleClass("center-align");
	clCol.toggleClass("large-6");
	clCol.toggleClass("medium-8");
	
	/*Vertically stack content divs when menu appears*/
	stack_content_divs();
	
	if(logo.hasClass("visible-for-small-only")){
		setTimeout(function(){
			sLogo.toggleClass("animated fadeOutRightBig");
		},600);
		setTimeout(function(){
			setTimeout(function(){
				toggle_info();
			},500);
			
			toggle_form();
			toggle_logo();
			toggle_cta();
		},1000);
	}
	else{
		sLogo.toggleClass("animated fadeOutRightBig");
		toggle_info();
		toggle_form();
		toggle_logo();
		toggle_cta();
	}

	setTimeout(function(){
		if(socialBar.hasClass("flipOutY")){
			socialBar.removeClass("flipOutY");
			socialBar.addClass("flipInY");			
		} else if(socialBar.hasClass("flipInY")){
			socialBar.removeClass("flipInY");
			socialBar.addClass("flipOutY");
		} else {
			socialBar.addClass("flipOutY");
		}
	},200);
}

function toggle_form(){
	form.toggleClass("visible-for-small-only");
	$("#mc-name-first").toggleClass("animated bounceInLeft");
	$("#mc-name-last").toggleClass("animated bounceInRight");
	$("#mc-email").toggleClass("animated bounceInLeft");
	$("#btn-submit").toggleClass("animated zoomIn");
}

function toggle_logo(){
	logo.toggleClass("visible-for-small-only");
	$(".image-logo").toggleClass("animated pulse");
}

function toggle_info(){
	infoRow.toggleClass("visible-for-small-only");
	info.toggleClass("animated fadeInLeftBig");
	links.toggleClass("animated fadeInRightBig");
}
/*********************************************************/