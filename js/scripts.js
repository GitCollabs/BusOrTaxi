let map;

function initMap() {

    const myLatlng = { lat: 53.4808, lng: -2.2426 };

    var options = {
        zoom: 14,
        center: myLatlng
    }

    map = new google.maps.Map(document.getElementById("map"), options);

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
        infoWindowOne = setWindowProperties(mapsMouseEvent);

        // Console logger
        consoleLogger(mapsMouseEvent);
        
        // Open window
        infoWindowOne.open(map);

    });
}

function setWindowProperties(mouseEvent) {

    let infoWindow = new google.maps.InfoWindow({
        position: mouseEvent.latLng
    });
    infoWindow.setContent(
        JSON.stringify(mouseEvent.latLng.toJSON(), null, 2)
    );
    return infoWindow;

}

function consoleLogger(mouseEvent) {
    console.log(mouseEvent.latLng.toJSON().lat, mouseEvent.latLng.toJSON().lng);
}