$(document).ready(function () {
  // Google Maps
  if ($("#gmap").length > 0) {
    var myLatlng = new google.maps.LatLng(39.9041999, 116.4073963);
    var myOptions = {
      zoom: 8,
      center: myLatlng,
      disableDefaultUI: true,
      panControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      },

      mapTypeControl: false,
      streetViewControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("gmap"), myOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "Beijing, China"
    });
  }
});
