jQuery(function() {

	//////////////////////////////  FLEXSLIDER  ////////////////////////////// 
    jQuery('.flexslider').flexslider({
        animation: "fade", 
        slideDirection: "horizontal",
        slideshow: true,
        slideshowSpeed: 7000,  
        aimationDuration: 600,   
        directionNav: true,             
        controlNav: true,               
    });
        
    //jQuery("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',theme:'dark_rounded', autoplay_slideshow: false});

	//////////////////////////////  social icon over effect ////////////////////////////// 
	jQuery('.social-header ul li a, .social-counter a').fadeTo(0,1);
	jQuery('.social-header ul li a, .social-counter a').mouseover(function() {
	jQuery(this).fadeTo("fast",0.6);
   	}).mouseout(function() { 
    	jQuery(this).fadeTo("fast",1); 
	});
		
	////////////////////////////// Tabs /////////////////////////////////////
	jQuery('.tabs-wrapper').each(function() {
		jQuery(this).find(".tab_content").hide(); //Hide all content
		jQuery(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
		jQuery(this).find("ul.tabs-sidebar li:first").addClass("active").show(); //Activate first tab
		jQuery(this).find(".tab_content:first").show(); //Show first tab content
	});
	jQuery("ul.tabs li").click(function(e) {
		jQuery(this).parents('.tabs-wrapper').find("ul.tabs li").removeClass("active"); //Remove any "active" class
		jQuery(this).addClass("active"); //Add "active" class to selected tab
		jQuery(this).parents('.tabs-wrapper').find(".tab_content").hide(); //Hide all tab content

		var activeTab = jQuery(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        activeTab = (idx = activeTab.lastIndexOf('/')) ? activeTab.substr(idx+1) : activeTab;
		jQuery(this).parents('.tabs-wrapper').find(activeTab).fadeIn(); //Fade in the active ID content
		
		e.preventDefault();
	});
	jQuery("ul.tabs-sidebar li").click(function(e) {
		jQuery(this).parents('.tabs-wrapper').find("ul.tabs-sidebar li").removeClass("active"); //Remove any "active" class
		jQuery(this).addClass("active"); //Add "active" class to selected tab
		jQuery(this).parents('.tabs-wrapper').find(".tab_content").hide(); //Hide all tab content

		var activeTab = jQuery(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        activeTab = (idx = activeTab.lastIndexOf('/')) ? activeTab.substr(idx+1) : activeTab;
		jQuery(this).parents('.tabs-wrapper').find(activeTab).fadeIn(); //Fade in the active ID content
		
		e.preventDefault();
	});
	jQuery("ul.tabs li a").click(function(e) {
		e.preventDefault();
	})
	jQuery("ul.tabs-sidebar li a").click(function(e) {
		e.preventDefault();
	})
  
	///////////////////////////// Tooltips ///////////////////////////////////
    jQuery('.tooltip').hover(function(){
        tip = jQuery(this).find('.post-tooltip');
        tip.stop(true, true).fadeIn('fast'); //Show tooltip
    }, function() {
        tip.stop(true, true).fadeOut('fast'); //Hide tooltip
    }).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coodrinates
        var mousey = e.pageY + 20; //Get Y coordinates
        var tipWidth = tip.width(); //Find width of tooltip
        var tipHeight = tip.height(); //Find height of tooltip

        //Distance of element from the right edge of viewport
        var tipVisX = jQuery(window).width() - (mousex + tipWidth);
        //Distance of element from the bottom of viewport
        var tipVisY = jQuery(window).height() - (mousey + tipHeight);

        if ( tipVisX < 20 ) { //If tooltip exceeds the X coordinate of viewport
            mousex = e.pageX - tipWidth - 35;
        } if ( tipVisY < 20 ) { //If tooltip exceeds the Y coordinate of viewport
            mousey = e.pageY - tipHeight + 25;
        }
        //Absolute position the tooltip according to mouse position
        tip.css({  top: mousey, left: mousex });
    });
	 ////////////////////////// Fade Hover Effect /////////////////////////////////
     jQuery(".flickr_stream img, .fadeover, .attachment-thumbnail").hover(function() {
		jQuery(this).stop().animate({ opacity: '0.4'},300);
		},function() {
		jQuery(this).stop().animate({ opacity: '1'},300);
	});
	

	///////////////////////// jCarouselLite Widget//////////////////////////////////
	jQuery('.anyClass').jCarouselLite({
	        btnNext: "#nextId",
	        btnPrev: "#prevId",
			visible: 4,
			scroll: 2
			
	    });
		
	///////////////////////// Toggle //////////////////////////////////
	jQuery(".toggle-content").hide(); 
	jQuery("h5.toggle").toggle(function(){
		jQuery(this).addClass("active");
		}, function () {
		jQuery(this).removeClass("active");
	});
	jQuery("h5.toggle").click(function(){
		jQuery(this).next(".toggle-content").slideToggle();
	});
	
	/////////////////////// Submenu link move ///////////////////////////////////
    jQuery(".sub-menu li").hover(function() {
		jQuery(this).find("a:first").stop().animate({ paddingLeft: '25px'},130);
	},function() {
		jQuery(this).find("a:first").stop().animate({ paddingLeft: '15px'},130);
	});
	
	//////////////////////////// colorbox to gallery ////////////////////////////////////
	jQuery('#gallery, .gallery-image').each(function(index, obj){
		var galleryid = Math.floor(Math.random()*10000);
		jQuery(obj).find('a').colorbox({rel:galleryid, maxWidth:'95%', maxHeight:'95%'});
	});
	jQuery("a.lightbox").colorbox({maxWidth:'95%', maxHeight:'95%'});
	jQuery('a[rel="lightbox"]').colorbox({maxWidth:'95%', maxHeight:'95%'});
	
	/////////////////////// Contact form ///////////////////////////////////
    /*
	jQuery('#contactForm').live('submit', function(e) {
		var form = jQuery(this);
		var name = jQuery(this).find('[name=backstreet_name]').val();
		var email = jQuery(this).find('[name=backstreet_email]').val();
		var message = jQuery(this).find('[name=backstreet_message]').val();
		
		if(name == '') {
			jQuery(this).find('[name=backstreet_name]').addClass('error');
			jQuery(this).find('[name=backstreet_name]').parent().find('.error_msg').fadeIn();
			
			return false;
		} else {
			jQuery(this).find('[name=backstreet_name]').removeClass('error');
			jQuery(this).find('[name=backstreet_name]').parent().find('.error_msg').fadeOut();
		}
		
		var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if(email == ''  || !email_regex.test(email)) {
			jQuery(this).find('[name=backstreet_email]').addClass('error');
			jQuery(this).find('[name=backstreet_email]').parent().find('.error_msg').fadeIn();
			
			return false;
		} else {
			jQuery(this).find('[name=backstreet_email]').removeClass('error');
			jQuery(this).find('[name=backstreet_email]').parent().find('.error_msg').fadeOut();
		}
		
		if(message == '') {
			jQuery(this).find('[name=backstreet_message]').addClass('error');
			jQuery(this).find('[name=backstreet_message]').parent().find('.error_msg').fadeIn();
			
			return false;
		} else {
			jQuery(this).find('[name=backstreet_message]').removeClass('error');
			jQuery(this).find('[name=backstreet_message]').parent().find('.error_msg').fadeOut();
		}
		$.ajax({
			url: ReedwanVars.ajaxUrl,
			data: jQuery(form).serialize()+'&action=reedwan_contact_form',
			type: 'POST',
			success: function() {
				jQuery('.email_sent').fadeIn(400).delay(5000).fadeOut(400);
			}
		});
		
		e.preventDefault();
	});
    */
    ////////////////////// TWITTER ///////////////////////////////////

    jQuery("#twitter").tweet({
        modpath: "/mysite/thirdparty/twitter/",
        //avatar_size: 50,
        count: 2,
        username: "debsthefuzz",
        filter: function(t){ return ! /^@\+w/.test(t.tweet_raw_text); },
        loading_text: '<p class="preLoading"></p>',
        refresh_interval: 60,
        template: '{avatar}{user}{time}<br />{text}{join}'
    });

    ////////////////////// FLICKR ///////////////////////////////////

    jQuery.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?id=30836174@N07&lang=en-us&format=json&jsoncallback=?', function(data){
        //var items = jQuery.shuffle(data.items);
        var items = data.items;
        jQuery(items).each(function(i,item){
            if(i > 8) return;
            jQuery('<img class="flickr_badge_image" />')
                .attr('src', item.media.m)
                .appendTo('#FlickrStream')
                .wrap('<a href="' + item.media.m.replace('_m', '_b') + '" title="' + item.title + '"></a>');

        });
        jQuery('#FlickrStream a').colorbox({maxWidth:'95%', maxHeight:'95%'});
    });

});
