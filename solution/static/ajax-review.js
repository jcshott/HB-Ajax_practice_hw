// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // $('#fortune-text').load('/fortune');
    $.get('/fortune', function (result) {
    	$('#fortune-text').html(result);
    })

    // for extra credit, look up .load() and simplify the above code.
}

$('#get-fortune-button').on('click', showFortune);




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();
    $('#weather-info').empty();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    $.get(url, function (result){
       for (item in result){
            $('#weather-info').append("<p><b>" + item.toUpperCase() + ":</b> " + result[item] + "</p>");
        }
    });
}

$("#weather-form").on('submit', showWeather);
