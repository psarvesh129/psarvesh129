function contactmap() {	

    if( jQuery('#map').length > 0 ){					
        // JNU Delhi coordinates
        var latlng = new google.maps.LatLng(28.5402, 77.1667);
        var settings = {
            zoom: 16,
            center: new google.maps.LatLng(28.5402, 77.1667),
            mapTypeControl: false,
            scrollwheel: false,
            draggable: true,
            panControl: false,
            scaleControl: false,
            zoomControl: false,
            streetViewControl: false,
            navigationControl: false
        };			
        var newstyle = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "saturation": 36 },
                    { "color": "#000000" },
                    { "lightness": 40 }
                ]
            },
            // Additional map styling options here...
        ];
        var mapOptions = {
            styles: newstyle,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'holver']
            }
        };
        var map = new google.maps.Map(document.getElementById("map"), settings);	
        var mapType = new google.maps.StyledMapType(newstyle, { name: "Grayscale" });    
        map.mapTypes.set('holver', mapType);
        map.setMapTypeId('holver');

        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

        // Updated Info Window for JNU Delhi
        var contentString = '<div id="content-map-icon" style="text-align:center; padding-top:10px; padding-left:10px">'+
            '<div id="siteNotice"></div>'+
            '<h4 id="firstHeading" class="firstHeading" style="color:#000!important; font-size:24px; font-weight:600; margin-bottom:0px;">Jawaharlal Nehru University</h4>'+
            '<div id="bodyContent">'+
            '<p style="color:#000 !important; font-weight:500; font-size:16px; line-height:24px; margin-bottom:10px">New Mehrauli Road<br> New Delhi, Delhi 110067, India</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        // JNU marker
        var companyPos = new google.maps.LatLng(28.5402, 77.1667);	
        var companyMarker = new google.maps.Marker({
            position: companyPos,
            map: map,
            title: "Jawaharlal Nehru University",
            zIndex: 3
        });

        google.maps.event.addListener(companyMarker, 'click', function() {
            infowindow.open(map, companyMarker);
        });
    }

    return false;
}// End ContactMap
