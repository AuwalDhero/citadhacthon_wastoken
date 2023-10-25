// Retrieve the user's token balance from localStorage
var userTokens = localStorage.getItem("userTokens");

// Check if the userTokens variable is not null (user has generated tokens)
if (userTokens !== null) {
    // Display the user's token balance on the page
    document.getElementById("token-balance").textContent = userTokens;
} else {
    // Handle the case where the user hasn't generated tokens yet
    document.getElementById("token-balance").textContent = "0";
}

// Function to initialize the map
function initializeMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 0, lng: 0 },
      zoom: 8,
    });
  
    // Add markers for all of the waste collection points.
    var wastePoints = [
      {
        lat: 12.34567,
        lng: 34.56789,
        name: "Waste Collection Point 1",
        address: "Address 1",
        contact: "Contact 1",
      },
      {
        lat: 45.67890,
        lng: 78.90123,
        name: "Waste Collection Point 2",
        address: "Address 2",
        contact: "Contact 2",
      },
      .horizontal-menu li {
        margin: 10px;
        text-align: center;
        border: 2px solid #333;
        border-radius: 50%; /* Make it circular */
        width: auto; /* Adjust the width as needed */
        height: 60px; /* Adjust the height as needed */
        line-height: 60px; /* Center text vertically */
        }

    .horizontal-menu a {
        text-decoration: none;
        color: black;
        }

    ];
  
    // Add markers and popups for waste collection points
    wastePoints.forEach(function (wastePoint) {
      var marker = new google.maps.Marker({
        position: { lat: wastePoint.lat, lng: wastePoint.lng },
        map: map,
        title: wastePoint.name,
      });
  
      // Create an info window with content for the marker
      var infoWindowContent =
        "<b>" +
        wastePoint.name +
        "</b><br>" +
        "Address: " +
        wastePoint.address +
        "<br>" +
        "Contact: " +
        wastePoint.contact;
  
      var infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent,
      });
  
      // Add click event listener to show info window when marker is clicked
      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    });
  }
  
  // Load the Google Maps API and initialize the map
  function loadGoogleMapsScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initializeMap";
    document.body.appendChild(script);
  }
  // Check if the user's name and token balance are stored locally
const storedName = localStorage.getItem("userName");
const storedTokens = localStorage.getItem("userTokens");

// If stored, update the page with the user's information
if (storedName !== null && storedTokens !== null) {
    document.getElementById("user-name").textContent = storedName;
    document.getElementById("token-balance").textContent = storedTokens;
}

// Function to update the user's name and token balance
function updateUserInformation() {
    const userName = prompt("Enter your name:");
    const tokenAmount = parseInt(prompt("Enter your token balance:"));

    if (!isNaN(tokenAmount)) {
        // Update the page with the new information
        document.getElementById("user-name").textContent = userName;
        document.getElementById("token-balance").textContent = tokenAmount;

        // Store the information locally in the browser
        localStorage.setItem("userName", userName);
        localStorage.setItem("userTokens", tokenAmount);
    }
}

// Call the function to update user information (you can trigger this in response to an event)
// updateUserInformation();

  // Call the function to load the Google Maps API and initialize the map
  loadGoogleMapsScript();
  
/*var map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 0, lng: 0},
    zoom: 8
    });
    
    // Add markers for all of the waste collection points.
    var wastePoints = [
    {
    lat: 12.34567,
    lng: 34.56789,
    name: "Waste Collection Point 1"
    },
    {
    lat: 45.67890,
    lng: 78.90123,
    name: "Waste Collection Point 2"
    }
    ];
    
    for (var i = 0; i < wastePoints.length; i++) {
    var marker = new google.maps.Marker({
    position: {lat: wastePoints[i].lat, lng: wastePoints[i].lng},
    map: map,
    title: wastePoints[i].name
    });
    }
    
    // When the user clicks on a marker, show a popup with more information about the waste collection point.
    google.maps.event.addListener(map, "click", function(event) {
    var marker = event.target;
    var wastePoint = wastePoints.find(function(point) {
    return point.lat === marker.position.lat() && point.lng === marker.position.lng();
    });
    
    if (wastePoint) {
    var popup = new google.maps.InfoWindow({
    content: "<b>" + wastePoint.name + "</b><br>" +
    "Address: " + wastePoint.address + "<br>" +
    "Contact: " + wastePoint.contact
    });
    popup.open(map, marker);
    }
    });/*

    