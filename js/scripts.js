$(".add-landmark").click(function(){
	$(".landmark-div").append(
							'<div class="form-group new-landmark-div">' +
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

	
	$(".new-landmark-div").each(function(){
		var inputtedLandmark = $(this).find("input.new-landmark").val();
		var newLandmark = {name : inputtedLandmark };
		
		newPlace.landmarks.push(newLandmark);	
	
	});
	
	$(".location-list").append("<li class='locationli'>" + 
									newPlace.newLocation +
							   "</li>");

							  
	$(".locationli").last().click(function() {		
		$(".show-places").show();
		
		$(".show-places h2").text(newPlace.newLocation);
		$(".location").text(newPlace.newLocation);
		$(".toy").text(newPlace.timeOfYear);
		
		$(".landmark-list").text("");

		newPlace.landmarks.forEach(function(landmark){
			$(".landmark-list").append("<li>" + landmark.name + "</li>");
			
		});
		
	});
	
	$(".new-location").val("");
	$(".new-toy").val("");
	$(".new-landmark").val("");


});

