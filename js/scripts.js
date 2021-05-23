let map;

function initMap() {

    const myLatlng = { lat: 53.4808, lng: -2.2426 };

    var options = {
        zoom: 14,
        center: myLatlng
    }

    map = new google.maps.Map(document.getElementById("map"), options);

    var starter;

    let infoWindowOne = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: myLatlng,
    });

    infoWindowOne.open(map);

    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        infoWindowOne.close();
        // Create a new InfoWindow.
        infoWindowOne = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng
        });
        infoWindowOne.setContent(
            JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        );
        starter = mapsMouseEvent.latLng.toJSON()
        console.log(starter.lat, starter.lng);
        infoWindowOne.open(map);
        i++;
    });
}
