////////////// VARIABLE DECLARATION ////////////////////////
var Choices = {
        dateNights: {
            dateOne: {
                parking: {},
                restaurant: {
                    name: 'Salty Sow',
                    address: '1917+manor+road,austin,tx',
                    labelLetter: 'S',
                    markerColor: 'blue',
                    placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc281917'
                },
                bar: {
                    name: 'Butterfly Bar',
                    address: '2307+Manor+Rd,Austin,TX+78722',
                    labelLetter: 'B',
                    markerColor: 'red',
                    placeID: 'ChIJ_SqzjOy1RIYR09ZBlUuVbyc'
                }
            }
        }
    }
    ////// THIS WILL CHANGE WITH SOME ///////////////
var date = Choices.dateNights.dateOne;


/////////add a custom icon to labelLetter! /////////////

$.ajax({
    url: 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + date.bar.placeID + '&key=AIzaSyC1HEKxkiAsyrFzLSt_Mm39q0_lR8U4UgU',
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp'
})
.done(function(response) {
    console.log("success")
    console.log(response);
})
.fail(function() {
    console.log("error");
});



$(document).ready(function() {
    $('#make-my-day').on('click', function() {
        $('#googlemap').html("<img src='https://maps.googleapis.com/maps/api/staticmap?size=300x300&maptype=roadmap&markers=color:" + date.restaurant.markerColor + "%7Clabel:" + date.restaurant.labelLetter + "%7C" + date.restaurant.address + "&markers=color:" + date.bar.markerColor + "%7Clabel:" + date.bar.labelLetter + "%7C" + date.bar.address + "&key=AIzaSyC1HEKxkiAsyrFzLSt_Mm39q0_lR8U4UgU' alt='map'>");
    })
})
