var Choices = {
    dateNights: {
        dateOne: {
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


/////////add a custom icon to labelLetter! /////////////

var date = Choices.dateNights.dateOne;


    $(document).ready(function() {
    $('#button').on('click', function() {
        $('#map').html("<img src='https://maps.googleapis.com/maps/api/staticmap?size=300x300&maptype=roadmap&markers=color:" + date.restaurant.markerColor + "%7Clabel:" + date.restaurant.labelLetter + "%7C" + date.restaurant.address + "&markers=color:red%7Clabel:B%7C2307+Manor+Rd,Austin,TX+78722&key=AIzaSyAO1ybpbxzx7RMHZHcwK_-S48cRjMmWJcI' alt='map'>");
    })
})
