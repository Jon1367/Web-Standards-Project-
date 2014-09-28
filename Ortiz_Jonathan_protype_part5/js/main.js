(function($){


  /* ==================== SearchBtn  ======================== */
	var searchBtn = $('#searchBtn');

	searchBtn.click(function(event){

	event.preventDefault();
	window.location.assign("result.html");

	});

	var login = $('#login');
	

	login.click(function(event){
	event.preventDefault();
		$('#back')
			.fadeIn()
			.find('#modal')
			.fadeIn();

	});
	$('#close').click(function(event){

		event.preventDefault();
		$('#back')
			.fadeOut()
			.find('#modal')
			.fadeOut();

	});

	})(jQuery);
  