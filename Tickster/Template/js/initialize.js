function init_goals(){
	$('#sample-goal-1').goalProgress({
        goalAmount: 150,
        currentAmount: 100,
        textBefore: '$',
        textAfter: ' raised',
        background: 'rgba(231, 76, 60,0.9)'
    });
    $('#sample-goal-2').goalProgress({
        goalAmount: 1000,
        currentAmount: 70,
        textBefore: 'Rs.',
        textAfter: ' raised',
        background: 'rgba(52, 152, 219,0.9)'
    });
    $('#sample-goal-3').goalProgress({
        goalAmount: 150,
        currentAmount: 50,
        textBefore: '$',
        textAfter: ' spent',
        background: 'rgba(149, 165, 166,0.9)'
    });
    $('#sample-goal-4').goalProgress({
        goalAmount: 1000,
        currentAmount: 280,
        textBefore: 'Rs.',
        textAfter: ' spent',
        background: 'rgba(52, 73, 94,0.9)'
    });
}

function init_one_page_theme(){
	$(".cta-image").each(function(){
    	$(this).addClass("hidden");
	});
    $('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		keyboardScrolling: true,
		scrollOverflow: true,
    	afterLoad: function(anchorLink, index){
            if(anchorLink == 'secondPage'){
                $(".cta-image").each(function(){
                	if(!$(this).hasClass("hidden")){
	        			$(this).removeClass("animated rotateIn");	
	        		}
	        		else{
	        			$(this).removeClass("hidden");
	        			$(this).addClass("animated rotateIn");
	        		}
        		});
            }
            if(anchorLink == 'thirdPage' && firstTime == 1){
                init_goals();
    			firstTime = 0;
            }
        }
	});
}

function init_clock(){
	$('#myCounter').mbComingsoon({ expiryDate: new Date(my_date), speed:100 });
	setTimeout(function () {
	    $(window).resize();
	}, 200);
}

function init_page(){
	$( document ).ready(function() {      
		var is_mobile = false;

		if( $('#device-test').css('display')=='none') {
		    is_mobile = true;
		    /* Enable vertival scrolling for mobile devices */
		    $('body').toggleClass("v-scroll-disabled");
		    $('body').toggleClass("v-scroll-enabled");
		}
		// now i can use is_mobile to run javascript conditionally
		if (is_mobile == false) {
			init_one_page_theme();
		}
		if (is_mobile == true) {
			init_goals();
		}
	});

	/*End Preloader*/
	$(window).load(function(){
	     $('.preloader').fadeOut();
	});
	
	/*Animation Styles*/
	$("#fb-icon").hover(function(){
		$("#fb-icon").addClass("animated swing");
	},function(){
		$("#fb-icon").removeClass("animated swing");
	});
	$("#tw-icon").hover(function(){
		$("#tw-icon").addClass("animated swing");
	},function(){
		$("#tw-icon").removeClass("animated swing");
	});
	$("#gp-icon").hover(function(){
		$("#gp-icon").addClass("animated swing");
	},function(){
		$("#gp-icon").removeClass("animated swing");
	});
	$("#yt-icon").hover(function(){
		$("#yt-icon").addClass("animated swing");
	},function(){
		$("#yt-icon").removeClass("animated swing");
	});
	
	$(".down-arrow").addClass("animated pulse infinite");
	$(".up-arrow").addClass("animated pulse infinite");
}

function sameHeights(selector) {
    var selector = selector || '[data-key="sameHeights"]',
        query = document.querySelectorAll(selector),
        elements = query.length,
        max = 0;
    if (elements) {
        while (elements--) {
            var element = query[elements];
            if (element.clientHeight > max) {
                max = element.clientHeight;
            }
        }
        elements = query.length;
        while (elements--) {
            var element = query[elements];
            element.style.height = max + 'px';
        }
    }
}
	    
function init_heights(){
	if ('addEventListener' in window) {
        window.addEventListener('resize', function(){
            sameHeights();
        });
        window.addEventListener('load', function(){
            sameHeights();
        });
    }
}

