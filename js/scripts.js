$(document).ready(function() {
    $("form#add").submit(function(event) {
        event.preventDefault();

        var inputLocation = $("input#location").val();
        var inputTime = $("input#time").val();
        var inputNotes = $("textarea#notes").val();

        var newPlace = { location: inputLocation, time: inputTime, notes: inputNotes };

        $("ul.places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

        $('input#location').val("");
        $('input#time').val("");
        $('textarea#notes').val("");

        $('.place').last().click(function() {
        $('#selected').show();
        $('#selected h2').text(newPlace.location);
        $('.location-display').text(newPlace.location);
        $('.time-display').text(newPlace.time);
        $('.notes-display').text(newPlace.notes);

    });

    });
});
