// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // TODO: get the fortune and show it in the fortune-text div
    $.get('/fortune', function(results) {
    	var fortune = results;

    	$("#fortune-text").html(fortune);
    })
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();
    var url = "/weather?zipcode=" + $("#zipcode-field").val()

    // TODO: request weather with that URL and show the forecast in #weather-info

    $.get(url, function(response) {
    	$("#weather-info").html(response.forecast);
    })
}

$("#weather-form").on('submit', showWeather);