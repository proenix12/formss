

jQuery(document).ready(function($){
	$('.tooltipLink').on('click', function(e){
		e.preventDefault();
		$('.tooltipLink').not($(this)).children().fadeOut();
		$(this).children().fadeIn();
	});
$(document).click(function(e) {
    var container = $(".tooltipLink");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.children().hide();
    }
});
})