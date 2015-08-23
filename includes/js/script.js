$(function(){

	$('#alertMe').click(function(e){
		e.preventDefault();
		console.log("here");
		console.log($('#successAlert'));
		$('#successAlert').slideDown();
	})


});