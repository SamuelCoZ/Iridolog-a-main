function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(33.9806, -117.3755), 
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    scrollwheel: false,
    draggable: false,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true,
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactform").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    Swal.fire({
      title: `<h1 class='message'>Gracias  ${formData.get("name")}</h1>`,
      html: "<h4 class='text'>Tu mensaje se ha enviado correctamente</h4>",
      customClass: {
        confirmButton: "custom-confirm-button",
        popup: "notification-popup",
        title: "notification-title",
        content: "notification-content",
        confirmButtonColor: "#ffffff", 
      confirmButtonClass: "btn-white",
      },
      background: "rgba(0, 0, 0, 0.6)",
      showClass: {
        popup: "animate__animated animate__fadeIn",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOut",
      },
    });
    
    this.reset();
  });
});