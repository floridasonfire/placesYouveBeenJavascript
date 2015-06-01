$(".add-landmark").click(function(){
	$(".landmark-div").append(
							'<div class="form-group new-landmark">' +
								'<label for="new-landmark">Landmarks</label>' +
								'<input type="text" class="form-group new-landmark">' +
							'</div>'
	)
	
});

$(".location-form").submit(function(event){
	event.preventDefault();
	
	var inputtedLocation = $(".new-location").val();
	var inputtedToy = $(".new-toy").val();
	var newPlace = { newLocation: inputtedLocation, timeOfYear: inputtedToy, landmarks: []};

	$(".location-list").append("<li class='location'>" + 
									newPlace.newLocation +
							   "</li>");

	$(".location").click(function(){
		
		$(".show-places").show();
		
		
		
		
	});















});

