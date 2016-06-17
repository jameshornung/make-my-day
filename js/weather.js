$('#make-my-day').on('click', function(){
	var key = '7f2c1ad71abdf07a660a8667474497f2';
	var zip = date.zipCode;
	var requestURL = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&APPID=' + key 
	
	$.ajax({
		url: requestURL,
		method: 'GET'
	})
	.done(function(response){

		var currentTemp = $('<p>').text('Current Temp: ' + Math.round(response.main.temp) + ' degrees');
		var highTemp = $('<p>').text('High Today: ' + Math.round(response.main.temp_max) + ' degrees');
		var humidity = $('<p>').text('Humidity: ' + response.main.humidity + ' percent');
		var windSpeed = $('<p>').text('Wind Speed: ' + response.wind.speed + ' mph');

		$('#weather').html('');
		
		$('#weather').append(currentTemp);
		$('#weather').append(highTemp);
		$('#weather').append(humidity);
		$('#weather').append(windSpeed);
	})
});



