// components/ChargingMap.js
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const ChargingMap = () => {
  const router = useRouter();
  const [locationPermission, setLocationPermission] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);
  const [resultsFetched, setResultsFetched] = useState(false);
  const stationType = router.query.type || "charging_stations";
  const APIKEY = "AIzaSyDcKMmZlfxMD9ReoN9ipqhSkI3rMS5AzYE"; // Replace with your actual API key
  const MAPS_API_URL = `https://maps.googleapis.com/maps/api/js?key=${APIKEY}&libraries=places&callback=initMap`;

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = MAPS_API_URL;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    if (resultsFetched && window.google) {
      initMap();
    } else {
      window.initMap = initMap;
      loadGoogleMapsScript();
    }
  }, [resultsFetched]);

  const requestGeolocationPermission = async () => {
    try {
      const status = await navigator.permissions.query({ name: "geolocation" });
      setLocationPermission(status.state);
      
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
        });
    } catch (error) {
      console.error("Error checking geolocation permission:", error);
    }
  };

  // useEffect(() => {
  //   if (navigator.permissions && navigator.permissions.query) {
  //     requestGeolocationPermission();
  //   } else {
  //     console.error("Geolocation permissions not supported by your browser");
  //   }
  // }, []);


  useEffect(() => {
    // Debounce geolocation calls
    const debouncedGeolocation = setTimeout(() => {
      if (locationPermission === "granted") {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting current location:", error);
          }
        );
      }
    }, 1000);

    return () => clearTimeout(debouncedGeolocation);
  }, [locationPermission]);

  const initMap = () => {
    if (currentLocation && locationPermission === "granted") {
      const mapInstance = new window.google.maps.Map(
        document.getElementById("chargingMapIframe"),
        {
          center: {
            lat: currentLocation.latitude,
            lng: currentLocation.longitude,
          },
          zoom: 12,
        }
      );

      setMap(mapInstance);

      // Add a custom marker for the current location
      const currentLocationMarker = new window.google.maps.Marker({
        position: {
          lat: currentLocation.latitude,
          lng: currentLocation.longitude,
        },
        map: mapInstance,
        title: "Current Location",
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Change to the desired marker icon URL
        },
      });

      // Perform a text search for charging stations near the current location
      const placesService = new window.google.maps.places.PlacesService(
        mapInstance
      );
      placesService.textSearch(
        {
          query: stationType,
          location: {
            lat: currentLocation.latitude,
            lng: currentLocation.longitude,
          },
          radius: 10000, // Adjust the radius as needed
        },
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setSearchResults(results);
            setResultsFetched(true);

            // Display markers for each result on the map
            results.forEach((result) => {
              const resultMarker = new window.google.maps.Marker({
                position: result.geometry.location,
                map: mapInstance,
                title: result.name,
              });

              // Add click event listener to show details when clicking on a search result marker
              resultMarker.addListener("click", () => {
                showDetails(result, resultMarker);
              });
            });
          } else {
            console.error("Error fetching search results:", status);
          }
        }
      );

      // Add click event listener to show details when clicking on the current location marker
      currentLocationMarker.addListener("click", () => {
        showDetails(
          { name: "Current Location", formatted_address: "You are here" },
          currentLocationMarker
        );
      });
    }
  };

  // Your existing showDetails and other functions...

  const showDetails = (place, marker) => {
    if (infoWindow) {
      infoWindow.close();
    }

    const handleMarkerClick = () => {
      debugger;
      const userLocation = currentLocation;
      if (userLocation) {
        // Open Google Maps with directions
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${
          userLocation.latitude
        },${
          userLocation.longitude
        }&destination=${place.geometry.location.lat()},${place.geometry.location.lng()}`;
        window.open(directionsUrl, "_blank");
      } else {
        console.error("Error: Unable to determine user location.");
      }
    };

    const content = `
      <div>
        <h3>${place.name}</h3>
        <p>${place.formatted_address}</p>
        <button id="infobutton">Get Directions</button>
      </div>`;

    const newInfoWindow = new window.google.maps.InfoWindow({
      content: content,
    });

    newInfoWindow.addListener("domready", () => {
      const infobutton = document.getElementById("infobutton");
      if (infobutton) {
        infobutton.addEventListener("click", () => {
          handleMarkerClick();
        });
      }
    });
    newInfoWindow.open(map, marker);
    setInfoWindow(newInfoWindow);
  };

  useEffect(() => {
    // Add event listener to initialize the map after the Google Maps JavaScript API is fully loaded
    if (resultsFetched && window.google) {
      initMap();
    } else {
      window.initMap = initMap;
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${APIKEY}&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, [currentLocation, stationType]);

  
  const handleRequestLocation = () => {
    navigator.permissions
      .request({ name: "geolocation" })
      .then((permissionStatus) => {
        setLocationPermission(permissionStatus.state);
        if (permissionStatus.state === "granted") {
          // Permission granted, get current location
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ latitude, longitude });
          });
        }
      })
      .catch((error) => {
        console.error("Error requesting geolocation permission:", error);
      });
  };

  return (
    <Layout>
      <Link href="/">
        <Button
          variant="outlined"
          color="warning"
          sx={{ marginTop: 2, marginLeft: 2 }}
        >
          Home
        </Button>
      </Link>

      <Container maxWidth="xl" sx={{ marginTop: 2, height: "70vh" }}>
        {locationPermission === "granted" && currentLocation && (
          <div id="chargingMapIframe" style={{ width: "100%", height: "100%" }}></div>
        )}
        {locationPermission !== "granted" && (
          <div>
          <Typography variant="h6">
            Please enable location services to view the map.
          </Typography>
          <Button
          variant="contained"
          color="primary"
          onClick={() => requestGeolocationPermission()}
          sx={{ marginTop: 2 }}
        >
          Allow Location Access
        </Button>
        </div>
        )}
      </Container>
    </Layout>
  );
};

export default ChargingMap;
