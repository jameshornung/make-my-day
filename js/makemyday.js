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
                    placeID: 'ChIJ61i-aZO1RIYRKgxgoJHJc28'
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
$(document).ready(function() {
    $('#make-my-day').on('click', function() {
        var map;

        function initMap() {
            map = new google.maps.Map(document.getElementById('googlemap'), {
                // got lazy, set the center to Austin
                center: { lat: 30.267153, lng: -97.743061 },
                zoom: 10
            });
        }
        initMap();
        var infowindow = new google.maps.InfoWindow();
        var restaurant = new google.maps.places.PlacesService(map);
        var bar = new google.maps.places.PlacesService(map);

        restaurant.getDetails({
            placeId: date.restaurant.placeID
        }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                });
                $('#googleplacedata').append('<div>Restaurant</div><div>' + place.name +'<br>' +place.formatted_address +'<br>'+ 'Price Level: ' + place.price_level + '<br>' + place.international_phone_number + '</div>');
                $('#googleplacedata').append('<div>Hours</div><div>' + place.opening_hours.weekday_text[0]+'<br>'+ place.opening_hours.weekday_text[1]+'<br>' + place.opening_hours.weekday_text[2]+'<br>'+ place.opening_hours.weekday_text[3]+'<br>'+place.opening_hours.weekday_text[4]+'<br>'+place.opening_hours.weekday_text[5]+'<br>'+place.opening_hours.weekday_text[6]+'<br>'+'</div>');
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address + '</div>');
                    infowindow.open(map, this);
                });
            }
        });
        bar.getDetails({
            placeId: date.bar.placeID
        }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker2 = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                 $('#googleplacedata').append('<div>Bar</div><div>' + place.name +'<br>' +place.formatted_address +'<br>'+ 'Price Level: ' + place.price_level + '<br>' + place.international_phone_number + '</div>');
                $('#googleplacedata').append('<div>Hours</div><div>' + place.opening_hours.weekday_text[0]+'<br>'+ place.opening_hours.weekday_text[1]+'<br>' + place.opening_hours.weekday_text[2]+'<br>'+ place.opening_hours.weekday_text[3]+'<br>'+place.opening_hours.weekday_text[4]+'<br>'+place.opening_hours.weekday_text[5]+'<br>'+place.opening_hours.weekday_text[6]+'<br>'+'</div>');
                google.maps.event.addListener(marker2, 'click', function() {
                    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address + '</div>');
                    infowindow.open(map, this);
                });
            }
        });
        var service = new google.maps.places.PlacesService(document.getElementById('googleplacedata').appendChild(document.createElement('div')));
    })
})




// $('#googlemap').html("<img src='https://maps.googleapis.com/maps/api/staticmap?size=300x300&maptype=roadmap&markers=color:" + date.restaurant.markerColor + "%7Clabel:" + date.restaurant.labelLetter + "%7C" + date.restaurant.address + "&markers=color:" + date.bar.markerColor + "%7Clabel:" + date.bar.labelLetter + "%7C" + date.bar.address + "&key=AIzaSyC1HEKxkiAsyrFzLSt_Mm39q0_lR8U4UgU' alt='map'>");
