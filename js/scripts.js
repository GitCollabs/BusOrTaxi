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

    let infoWindowTwo;

    let windowSelector = 2;

    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {

        if (windowSelector % 2 === 0) {

            // Close InfoWindowOne and Two.
            infoWindowOne.close();
            if(windowSelector !== 2) {
                infoWindowTwo.close();
            }

            // Create a new InfoWindowOne.
            infoWindowOne = setWindowProperties(mapsMouseEvent);

            // Console logger
            consoleLogger(mapsMouseEvent);
            
            // Open infoWindowOne
            infoWindowOne.open(map);
            
            windowSelector++;
        
        }
        else {
            
            // Create a new InfoWindowTwo.
            infoWindowTwo = setWindowProperties(mapsMouseEvent);

            // Console logger
            consoleLogger(mapsMouseEvent);
                        
            // Open infoWindowTwo
            infoWindowTwo.open(map);
                        
            windowSelector = 4;

        }

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