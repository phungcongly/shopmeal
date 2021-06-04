AOS.init({
  once:true,
  duration:600,
  offset:200
});


$('.slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    prevArrow:".prev",
    nextArrow:".next",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
    ],
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      } 
    ]
  });

  function initMap() {
    // Styles a map in night mode.
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.674, lng: -73.945 },
      zoom: 12,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        {
          elementType: "labels.text.stroke",
          stylers: [{ color: "#242f3e" }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    });
  }
  const bar = document.querySelector('.bars');
  const menu = document.querySelector('.nav-menu');
  console.log(menu);

  bar.addEventListener('click',function(){
     console.log(bar)
     menu.classList.toggle('active')
  })
  
 