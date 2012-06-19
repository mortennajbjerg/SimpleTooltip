(function($) {
	
	$(function(){
		
		var tooltipSettings = {
			tooltipspeed : 'fast',
			tooltipSlide : '-8px'
		}
		
		function tooltip(selector, tooltip) {
			
			$(selector).css('position', 'relative');
			
			$(selector).hover(function() {
				if( !$(this).hasClass('activeTooltip') ) {
					$(this).addClass('activeTooltip');
					$(this).append('<div class="simpletooltip">' + tooltip + '</div>');
					var ttObj = $(this).find('.simpletooltip');
					ttObj.css('margin-bottom', tooltipSettings.tooltipSlide);
					ttObj.animate( { marginBottom : 0 }, { queue: false, duration: tooltipSettings.tooltipspeed })
					ttObj.hide().fadeIn(tooltipSettings.tooltipspeed);
				}
			}, function() {
				$this = $(this);
				
				var ttObj = $(this).find('.simpletooltip');
				ttObj.animate( { marginBottom : tooltipSettings.tooltipSlide }, { queue: false, duration: tooltipSettings.tooltipspeed })
				ttObj.fadeOut(tooltipSettings.tooltipspeed, function() { 
					$('.activeTooltip').removeClass('activeTooltip');
					$(this).remove();
				});
			});
		}
		
		tooltip('.tooltip', 'This is a test tooltip');
		
		
	});
	
})(jQuery);