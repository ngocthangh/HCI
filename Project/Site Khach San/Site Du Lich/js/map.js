// JavaScript Document
/* umit karaosmanoglu - www.umitkaraosmanoglu.com */

var mapLocation = new google.maps.LatLng(59.32522, 18.07002); // change these number to show where your map location
var markerLocation = new google.maps.LatLng(59.32522, 18.07002); // change these number to show your marker
var mapZoom = 13; // change for zooming
var marker;
var map;

function initialize() {
	var mapOptions = {
	  zoom: mapZoom,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  center: mapLocation
	};

	map = new google.maps.Map(document.getElementById('map_canvas'),
			mapOptions);

	marker = new google.maps.Marker({
	  map:map,
	  draggable:true,
	  animation: google.maps.Animation.DROP,
	  position: markerLocation
	});
	google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

	if (marker.getAnimation() != null) {
	  marker.setAnimation(null);
	} else {
	  marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}