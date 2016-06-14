////////////// VARIABLE DECLARATION
var Choices = {
        dateNights: {
            dateOne: {
                parking: {},
                restaurant: {
                    name: 'Salty Sow',
                    address: '1917+manor+road,austin,tx',
                    labelLetter: 'S',
                    markerColor: 'blue'
                },
                bar: {
                    name: 'Butterfly Bar',
                    address: '2307+Manor+Rd,Austin,TX+78722',
                    labelLetter: 'B',
                    markerColor: 'red'
                }
            }
        }
    }
    ////// THIS WILL CHANGE WITH SOME ///////////////
var date = Choices.dateNights.dateOne;


/////////add a custom icon to labelLetter! /////////////





$(document).ready(function() {
    $('#make-my-day').on('click', function() {
        $('#googlemap').html("<img src='https://maps.googleapis.com/maps/api/staticmap?size=300x300&maptype=roadmap&markers=color:" + date.restaurant.markerColor + "%7Clabel:" + date.restaurant.labelLetter + "%7C" + date.restaurant.address + "&markers=color:" + date.bar.markerColor + "%7Clabel:" + date.bar.labelLetter + "%7C" + date.bar.address + "&key=AIzaSyAO1ybpbxzx7RMHZHcwK_-S48cRjMmWJcI' alt='map'>");
    })
})
