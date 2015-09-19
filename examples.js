
$(function(){

	$.ajax({

		url:"data.json"

	}).done(function(response){
		console.log(response)
		for (var it = 0; it< response.length; it++){
			console.log(response[it]);
			var $content = $("<div style='background-color: " + response[it].value +" '><p>Color " + it + " " 
				+ response[it].color + " " + "</p></div>");
			console.log($content);

			$(".content-placeholder").append($content);

		



  






				// $content.append()
			// You will append a p tag into each div with the name of the color, 
			// and add a CSS class with the color value to the entire div.



		}

	});


});
































// $(document).ready(function() {

//     $.ajax('data.json', {
//         success: function(response){
//             console.log(response);
//         },
//         error: function(request, errorType, errorMessage){
//             alert(errorType + " " + errorMessage);
//         }
//     });

// })