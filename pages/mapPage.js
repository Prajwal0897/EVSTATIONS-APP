// components/ChargingMap.js
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const ChargingMap = () => {
  const router = useRouter();
  const stationType = router.query.type || "charging_stations";
  const APIKEY = "AIzaSyDcKMmZlfxMD9ReoN9ipqhSkI3rMS5AzYE";
  useEffect(() => {
    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Update the iframe source with your API key and the current location
          const iframe = document.getElementById("chargingMapIframe");
          if (iframe) {
            iframe.src = `https://www.google.com/maps/embed/v1/search?key=${APIKEY}&q=${stationType}&center=${latitude},${longitude}&zoom=12`;
          }
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []); // Run the effect only once on component mount

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
        {/* Replace YOUR_API_KEY with the actual API key you obtained from the Google Cloud Console */}
        <iframe
          id="chargingMapIframe"
          width="100%"
          height="100%"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </Layout>
  );
};

export default ChargingMap;
